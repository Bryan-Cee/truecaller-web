import React from "react";

const Message = () => {
  return (
    <div className="px-4 py-3">
      <div className="flex gap-x-4">
        <div className="grid aspect-square place-content-center rounded-full h-13 w-13">
          <div className="relative flex items-center justify-center rounded-full border-white h-12 w-12 bg-avatar-green">
            <div className="grid h-full w-full place-content-center rounded-full text-brand-green">
              <span className="text-xl">N</span>
            </div>
          </div>
        </div>
        <div className="flex gap-1 flex-col">
          <div className="flex justify-between">
            <div className="select-text truncate text-base leading-5 font-medium">
              Sender Title
            </div>
            <div className="text-ink-secondary mx-1 whitespace-nowrap text-right text-xs">
              Monday
            </div>
          </div>
          <div className="h-6">
            <div className="leading-[1.2] max-w-xs truncate">
              <span className="text-sm text-ink-secondary">
                M-PESA Paybill Successful:KES.500.00 to 522533 - Lipa na KCB
                -7670696 LOOP Ref NHTZMSWRES2D, M-Pesa Ref SDA9R6LSTX, Fee:
                KES.2.88 on 10/04/2024 16:51:29.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
