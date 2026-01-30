import { AlertCircle, CheckCircle2 } from "lucide-react";

const FeeStatusWidget = ({ widget }) => {
  const fees = widget.data || [
    { id: 1, label: "Tuition Fee", amount: 45000, status: "Paid" },
    { id: 2, label: "Library Fine", amount: 500, status: "Pending" },
    { id: 3, label: "Hostel Fee", amount: 30000, status: "Paid" },
  ];

  const showOnlyPending = widget.config?.showOnlyPending || false;
  const currency = widget.config?.currency || "₹";

  const visibleFees = showOnlyPending
    ? fees.filter((fee) => fee.status === "Pending")
    : fees;

  return (
    <div className="flex flex-col gap-3">
      {visibleFees.length === 0 ? (
        <div className="text-sm text-gray-500 text-center">
          🎉 No pending dues
        </div>
      ) : (
        visibleFees.map((fee) => (
          <div
            key={fee.id}
            className="border border-gray-200 rounded-lg p-4 flex justify-between items-center"
          >
            <div className="flex items-center gap-2">
              {fee.status === "Pending" ? (
                <AlertCircle className="text-red-500" size={18} />
              ) : (
                <CheckCircle2 className="text-green-500" size={18} />
              )}
              <span className="font-medium text-gray-800">
                {fee.label}
              </span>
            </div>

            <div className="font-semibold text-gray-900">
              {currency}
              {fee.amount}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default FeeStatusWidget;
