"use client";

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
import { useTopUpWalletMutation } from "@/redux/features/wallet/wallet.api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

function TopUp() {
  const navigate = useNavigate();
  const [topUp] = useTopUpWalletMutation();
  const form = useForm({
    defaultValues: {
      amount: "",
    },
  });

  const handleSubmit = async (data: { amount: string }) => {
    const toastId = toast.loading("Processing Top Up...");
    try {
      const res = await topUp({ ...data, amount: Number(data.amount) });
      if (res?.data?.success) {
        toast.success("Top Up Successful", { id: toastId });
      }
      console.log("res", res);
      navigate("/user/me");
    } catch (err: any) {
      console.log(err);
      toast.error(err?.data?.message || "Top Up Failed", { id: toastId });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Card className="rounded-xl shadow-md border bg-card text-card-foreground">
        {/* Header with primary background */}
        <CardHeader className="bg-primary text-primary-foreground rounded-t-xl">
          <CardTitle className="text-lg font-semibold">Add Money</CardTitle>
          <CardDescription className="text-primary-foreground/80">
            Add money to your wallet securely
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          <Form {...form}>
            <form
              id="topup"
              className="space-y-5"
              onSubmit={form.handleSubmit(handleSubmit)}
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
                      <Input
                        type="number"
                        placeholder="e.g. 2000"
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
            form="topup"
            className="bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            Add Money
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default TopUp;
