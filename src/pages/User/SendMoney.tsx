// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useSendMoneyMutation } from "@/redux/features/wallet/wallet.api";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router";
// import { toast } from "sonner";
// interface SendMoneyFormValues {
//   receiverId: string;
//   amount: string; // number input as string
//   reference: string;
// }
// function SendMoney() {
//   const navigate = useNavigate();
//   const [sendMoney] = useSendMoneyMutation();

//   const form = useForm<SendMoneyFormValues>({
//     defaultValues: {
//       receiverId: "",
//       amount: "",
//       reference: "",
//     },
//   });

//   const handleSendMoney = async (data: SendMoneyFormValues) => {
//     const toastId = toast.loading("Sending Money...");

//     try {
//       const res = await sendMoney({
//         receiverId: data.receiverId,
//         amount: Number(data.amount), // ✅ convert string → number
//         reference: data.reference,
//       }).unwrap(); // unwrap makes it type-safe

//       if (res.success) {
//         toast.success(res.message || "Send Money sent successfully 🎉", {
//           id: toastId,
//         });
//         console.log("Transaction:", res.data.transactionId);
//       }
//       navigate("/user/me");
//     } catch (err: any) {
//       toast.error(err?.data?.message || "Send Money Failed", { id: toastId });
//       console.log(err);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <Card className="rounded-xl shadow-md border bg-card text-card-foreground">
//         {/* Header */}
//         <CardHeader className="bg-primary text-primary-foreground rounded-t-xl">
//           <CardTitle className="text-lg font-semibold">Send Money</CardTitle>
//           <CardDescription className="text-primary-foreground/80">
//             Send money securely to another user
//           </CardDescription>
//         </CardHeader>

//         <CardContent className="pt-6">
//           <Form {...form}>
//             <form
//               id="sendMoney"
//               className="space-y-5"
//               onSubmit={form.handleSubmit(handleSendMoney)}
//             >
//               {/* Receiver ID */}
//               <FormField
//                 control={form.control}
//                 name="receiverId"
//                 rules={{ required: "Receiver ID is required" }}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Receiver ID</FormLabel>
//                     <FormControl>
//                       <Input
//                         type="text"
//                         placeholder="Receiver ID"
//                         className="bg-background border-input"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               {/* Amount */}
//               <FormField
//                 control={form.control}
//                 name="amount"
//                 rules={{ required: "Amount is required" }}
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Amount (৳)</FormLabel>
//                     <FormControl>
//                       <Input
//                         type="number"
//                         placeholder="e.g. 200"
//                         className="bg-background border-input"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               {/* Reference */}
//               <FormField
//                 control={form.control}
//                 name="reference"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Reference (optional)</FormLabel>
//                     <FormControl>
//                       <Input
//                         type="text"
//                         placeholder="e.g. Send money 1"
//                         className="bg-background border-input"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </form>
//           </Form>
//         </CardContent>

//         <CardFooter className="flex justify-end">
//           <Button
//             type="submit"
//             form="sendMoney"
//             className="bg-primary text-primary-foreground hover:opacity-90 transition"
//           >
//             Send Money
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }

// export default SendMoney;

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
import { useSendMoneyMutation } from "@/redux/features/wallet/wallet.api";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { ISendMoneyResponse } from "@/types";

interface SendMoneyFormValues {
  receiverId: string;
  amount: string; // number input as string
  reference: string;
}

function SendMoney() {
  const [sendMoney] = useSendMoneyMutation();

  const [isOpen, setIsOpen] = useState(false);
  const [trxInfo, setTrxInfo] = useState<null | ISendMoneyResponse>(null);

  const form = useForm<SendMoneyFormValues>({
    defaultValues: {
      receiverId: "",
      amount: "",
      reference: "",
    },
  });

  const handleSendMoney = async (data: SendMoneyFormValues) => {
    const toastId = toast.loading("Sending Money...");

    try {
      const res = await sendMoney({
        receiverId: data.receiverId,
        amount: Number(data.amount),
        reference: data.reference,
      }).unwrap();

      const trxData = res?.data;

      if (trxData) {
        setTrxInfo({
          oldBalance: trxData.oldBalance,
          newSenderBalance: trxData.newSenderBalance,
          trxId: trxData.trxId,
        });
        setIsOpen(true);
      }

      toast.success(res?.message || "Transaction Successful 🎉", {
        id: toastId,
      });
      form.reset();
    } catch (err: any) {
      toast.error(err?.data?.message || "Send Money Failed", { id: toastId });
      console.log(err);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <Card className="rounded-xl shadow-md border bg-card text-card-foreground">
        <CardHeader className="bg-primary text-primary-foreground rounded-t-xl">
          <CardTitle className="text-lg font-semibold">Send Money</CardTitle>
          <CardDescription className="text-primary-foreground/80">
            Send money securely to another user
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
                name="receiverId"
                rules={{ required: "Receiver ID is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Receiver ID</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Receiver ID"
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
                        placeholder="e.g. Send money 1"
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
            Send Money
          </Button>
        </CardFooter>
      </Card>

      {/* Modal to show transaction info */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md rounded-xl border bg-card text-card-foreground shadow-md">
          <DialogHeader className="bg-primary text-primary-foreground rounded-t-xl p-4">
            <DialogTitle className="text-lg font-semibold">
              Transaction Successful 🎉
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-2 mt-4 px-4">
            <p>
              <strong>Old Balance:</strong> ৳{trxInfo?.oldBalance}
            </p>
            <p>
              <strong>New Balance:</strong> ৳{trxInfo?.newSenderBalance}
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

export default SendMoney;
