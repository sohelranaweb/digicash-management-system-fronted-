import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useCashInMutation } from "@/redux/features/wallet/wallet.api";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { ICashInResponse } from "@/types";

interface CashInFormValues {
  userId: string;
  amount: string; // number input as string
  reference: string;
}

function CashIn() {
  const [cashIn] = useCashInMutation();

  const [isOpen, setIsOpen] = useState(false);
  const [trxInfo, setTrxInfo] = useState<null | ICashInResponse>(null);

  const form = useForm<CashInFormValues>({
    defaultValues: {
      userId: "",
      amount: "",
      reference: "",
    },
  });

  const handleSendMoney = async (data: CashInFormValues) => {
    const toastId = toast.loading("Cash In...");

    try {
      const res = await cashIn({
        userId: data.userId,
        amount: Number(data.amount),
        reference: data.reference,
      }).unwrap();

      const trxData = res?.data;

      if (trxData) {
        setTrxInfo({
          oldBalance: trxData.oldBalance,
          newAgentBalance: trxData.newAgentBalance,
          trxId: trxData.trxId,
        });
        setIsOpen(true);
      }

      toast.success(res?.message || "Transaction Successful 🎉", {
        id: toastId,
      });
      form.reset();
    } catch (err: any) {
      toast.error(err?.data?.message || "Cash In Failed", { id: toastId });
      console.log(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Card className="rounded-xl shadow-md border bg-card text-card-foreground">
        <CardHeader className="bg-primary text-primary-foreground rounded-t-xl">
          <CardTitle className="text-lg font-semibold">Cash In</CardTitle>
          <CardDescription className="text-primary-foreground/80 pb-2">
            Cash in securely to user
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          <Form {...form}>
            <form
              id="sendMoney"
              className="space-y-5"
              onSubmit={form.handleSubmit(handleSendMoney)}
            >
              {/* Receiver ID */}
              <FormField
                control={form.control}
                name="userId"
                rules={{ required: "Receiver ID is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User ID</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="User ID"
                        className="bg-background border-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Amount */}
              <FormField
                control={form.control}
                name="amount"
                rules={{ required: "Amount is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount (৳)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g. 200"
                        className="bg-background border-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Reference */}
              <FormField
                control={form.control}
                name="reference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reference (optional)</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="e.g. Cash In 1"
                        className="bg-background border-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex justify-end">
          <Button
            type="submit"
            form="sendMoney"
            className="bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            Cash In
          </Button>
        </CardFooter>
      </Card>

      {/* Modal to show transaction info */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md rounded-xl border bg-card text-card-foreground shadow-md">
          <DialogHeader className="bg-primary text-primary-foreground rounded-t-xl p-4">
            <DialogTitle className="text-lg font-semibold">
              Transaction Successful
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-2 mt-4 px-4">
            <p>
              <strong>Old Balance:</strong> ৳{trxInfo?.oldBalance}
            </p>
            <p>
              <strong>New Balance:</strong> ৳{trxInfo?.newAgentBalance}
            </p>
            <p>
              <strong>Transaction ID:</strong> {trxInfo?.trxId}
            </p>
          </div>

          <DialogFooter className="px-4 py-3 flex justify-end">
            <Button
              onClick={() => setIsOpen(false)}
              className="bg-primary text-primary-foreground hover:opacity-90 transition"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CashIn;
