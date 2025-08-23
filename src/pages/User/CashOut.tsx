import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
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
import { useCashOutMutation } from "@/redux/features/wallet/wallet.api";
import { toast } from "sonner";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import type { ICashOutResponse } from "@/types";

interface CashOutFormValues {
  amount: string;
  agentWalletId: string;
  reference?: string;
}

function CashOut() {
  const [cashOut] = useCashOutMutation();
  const [trxInfo, setTrxInfo] = useState<ICashOutResponse | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<CashOutFormValues>({
    defaultValues: {
      amount: "",
      agentWalletId: "",
      reference: "",
    },
  });

  const handleCashOut = async (data: CashOutFormValues) => {
    const toastId = toast.loading("Processing Cash Out...");

    try {
      const res = await cashOut({
        amount: Number(data.amount),
        agentWalletId: data.agentWalletId,
        reference: data.reference,
      }).unwrap();

      toast.success(res.message, { id: toastId });

      setTrxInfo(res.data);
      setIsOpen(true);
      form.reset();
    } catch (err: any) {
      console.log(err);
      toast.error(err?.data?.message || "Cash Out Failed", { id: toastId });
    }
  };

  return (
    <>
      <Card className="rounded-xl shadow-md border bg-card text-card-foreground max-w-md mx-auto mt-10">
        <CardHeader className="bg-primary text-primary-foreground rounded-t-xl">
          <CardTitle className="text-lg font-semibold">Cash Out</CardTitle>
          <CardDescription className="text-primary-foreground/80">
            Cash out money securely via an agent
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          <Form {...form}>
            <form
              id="cashOutForm"
              className="space-y-5"
              onSubmit={form.handleSubmit(handleCashOut)}
            >
              {/* Amount */}
              <FormField
                control={form.control}
                name="amount"
                rules={{ required: "Amount is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount (৳)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="e.g. 200" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Agent Wallet ID */}
              <FormField
                control={form.control}
                name="agentWalletId"
                rules={{ required: "Agent Wallet ID is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Agent Wallet ID</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Agent Wallet ID"
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
                        placeholder="e.g. 200 taka only"
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
            form="cashOutForm"
            className="bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            Cash Out
          </Button>
        </CardFooter>
      </Card>

      {/* Modal to show transaction info */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md rounded-xl border bg-card text-card-foreground shadow-md">
          <DialogHeader className="bg-primary text-primary-foreground rounded-t-xl p-4">
            <DialogTitle className="text-lg font-semibold">
              Cash Out Successful 🎉
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-2 mt-4 px-4">
            <p>
              <strong>Old Balance:</strong> ৳{trxInfo?.oldBalance}
            </p>
            <p>
              <strong>Total Deducted:</strong> ৳{trxInfo?.totalDeducted}
            </p>
            <p>
              <strong>New Balance:</strong> ৳{trxInfo?.newBalance}
            </p>
            <p>
              <strong>Fee:</strong> ৳{trxInfo?.fee}
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
    </>
  );
}

export default CashOut;
