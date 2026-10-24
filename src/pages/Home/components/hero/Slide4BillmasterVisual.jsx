import React from 'react';
import { Receipt, Scan, Printer, CreditCard, Barcode } from 'lucide-react';
export const Slide4BillmasterVisual = () => {
  return (
    <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[500px] flex items-center justify-center select-none overflow-visible">
      {/* Background warm orange glow */}
      <div className="absolute w-84 h-84 rounded-full bg-brand-orange/15 blur-3xl pointer-events-none hero-animate-pulse-glow" />
      <div className="absolute w-72 h-72 rounded-full bg-brand-navy/5 blur-2xl pointer-events-none -top-4 right-4" />

      {/* CENTER / MAIN: Billmaster Desktop Application Window */}
      <div className="relative z-10 w-[280px] sm:w-[330px] lg:w-[370px] bg-white rounded-xl shadow-2xl border border-slate-200/90 overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
        {/* Billmaster App Titlebar */}
        <div className="bg-brand-navy px-3.5 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-brand-orange flex items-center justify-center text-white font-extrabold text-[10px]">
              B
            </div>
            <div>
              <span className="text-[11px] font-extrabold text-white tracking-wide">
                Billmaster <span className="text-brand-orange">Pro</span>
              </span>
              <span className="ml-2 text-[8px] text-slate-400 font-mono">v4.2 POS Edition</span>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[8px] font-bold">
            Hardware Ready
          </span>
        </div>

        {/* Billing Counter & Invoice Content */}
        <div className="p-3.5 bg-slate-50 space-y-3">
          {/* Quick Counter Info */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-[9px]">
            <div>
              <span className="text-slate-400">Invoice: </span>
              <span className="font-bold text-brand-navy font-mono">#BM-2026-9812</span>
            </div>
            <div>
              <span className="text-slate-400">Register: </span>
              <span className="font-semibold text-brand-navy">Terminal 01</span>
            </div>
          </div>

          {/* Itemized Billing Table Preview */}
          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs">
            <div className="bg-slate-100 px-2 py-1 grid grid-cols-12 text-[7px] font-bold text-slate-500 uppercase">
              <span className="col-span-6">Item Description</span>
              <span className="col-span-2 text-center">Qty</span>
              <span className="col-span-2 text-right">Tax</span>
              <span className="col-span-2 text-right">Total</span>
            </div>
            <div className="divide-y divide-slate-100 text-[8px]">
              <div className="px-2 py-1.5 grid grid-cols-12 items-center">
                <span className="col-span-6 font-semibold text-brand-navy">
                  Retail Item SKU-410
                </span>
                <span className="col-span-2 text-center text-slate-600">2</span>
                <span className="col-span-2 text-right text-slate-500">18%</span>
                <span className="col-span-2 text-right font-bold text-brand-navy">₹1,200</span>
              </div>
              <div className="px-2 py-1.5 grid grid-cols-12 items-center bg-orange-50/40">
                <span className="col-span-6 font-semibold text-brand-navy">
                  POS Peripheral Cable
                </span>
                <span className="col-span-2 text-center text-slate-600">1</span>
                <span className="col-span-2 text-right text-slate-500">18%</span>
                <span className="col-span-2 text-right font-bold text-brand-navy">₹450</span>
              </div>
              <div className="px-2 py-1.5 grid grid-cols-12 items-center">
                <span className="col-span-6 font-semibold text-brand-navy">
                  Thermal Receipt Rolls (Box)
                </span>
                <span className="col-span-2 text-center text-slate-600">3</span>
                <span className="col-span-2 text-right text-slate-500">12%</span>
                <span className="col-span-2 text-right font-bold text-brand-navy">₹850</span>
              </div>
            </div>
          </div>

          {/* Invoice Summary and Instant Checkout Action */}
          <div className="flex items-center justify-between pt-1">
            <div>
              <div className="text-[7px] text-slate-400 uppercase font-semibold">Net Payable</div>
              <div className="text-[15px] font-extrabold text-brand-navy">₹2,500.00</div>
            </div>
            <button className="px-3 py-1.5 bg-brand-orange text-white rounded-md text-[9px] font-bold shadow-xs hover:bg-brand-orange-hover flex items-center gap-1.5 transition-colors">
              <CreditCard className="w-3 h-3" />
              <span>Complete & Print</span>
            </button>
          </div>
        </div>
      </div>

      {/* FLOATING ITEM 1: Handheld Barcode Scanner with Active Laser (Left) */}
      <div className="absolute z-20 left-1 sm:left-3 top-8 sm:top-12 w-42 sm:w-48 bg-white rounded-xl shadow-2xl border border-slate-200/90 p-3 hero-animate-float">
        <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <Scan className="w-4 h-4 text-brand-orange" />
            <span className="text-[8px] font-bold text-brand-navy">Barcode Scanner</span>
          </div>
          <span className="text-[6px] font-bold text-emerald-600 bg-emerald-50 px-1 rounded">
            CONNECTED
          </span>
        </div>

        {/* Barcode with Animated Laser Beam */}
        <div className="mt-2 relative bg-slate-50 p-2 rounded border border-slate-200 overflow-hidden">
          <div className="flex justify-center items-center h-8">
            <Barcode className="w-28 h-8 text-brand-navy" />
          </div>

          {/* Animated Laser Scanning Line */}
          <div className="absolute left-0 right-0 h-0.5 bg-red-500 shadow-[0_0_8px_#ef4444] hero-animate-laser pointer-events-none" />
        </div>

        <div className="mt-1.5 flex justify-between items-center text-[7px] text-slate-500">
          <span>High-Speed 2D Laser</span>
          <span className="font-mono text-brand-orange font-bold">Auto-Detect</span>
        </div>
      </div>

      {/* FLOATING ITEM 2: Thermal Receipt Printer with Paper Feed (Right) */}
      <div className="absolute z-20 right-1 sm:right-3 bottom-2 sm:bottom-6 w-44 sm:w-52 bg-white rounded-xl shadow-2xl border border-slate-200/90 p-3 hero-animate-float-reverse">
        <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <Printer className="w-4 h-4 text-brand-orange" />
            <span className="text-[8px] font-bold text-brand-navy">Thermal Printer</span>
          </div>
          <span className="text-[6px] font-bold text-brand-orange bg-orange-50 px-1 rounded">
            READY
          </span>
        </div>

        {/* Printed Thermal Slip (reveals smoothly) */}
        <div className="mt-2 bg-amber-50/50 border border-amber-200/80 rounded p-2 text-[7px] font-mono text-slate-700 space-y-1 shadow-inner hero-animate-receipt">
          <div className="text-center font-bold text-brand-navy border-b border-dashed border-slate-300 pb-1">
            BILLMASTER POS RECEIPT
          </div>
          <div className="flex justify-between text-[6px]">
            <span>ITEM: Retail Pack</span>
            <span>₹1,200</span>
          </div>
          <div className="flex justify-between text-[6px]">
            <span>TAX (GST 18%):</span>
            <span>₹216</span>
          </div>
          <div className="flex justify-between font-bold border-t border-dashed border-slate-300 pt-1 text-[7px] text-brand-navy">
            <span>TOTAL PAID</span>
            <span>₹1,416.00</span>
          </div>
          <div className="text-center text-[6px] text-emerald-600 font-bold pt-0.5">
            ✔ TRANSACTION APPROVED
          </div>
        </div>
      </div>

      {/* Pill Badge at Bottom Center */}
      <div className="absolute -bottom-2 z-30 bg-white/95 backdrop-blur-md border border-slate-200 shadow-md rounded-full px-3.5 py-1 flex items-center gap-2">
        <Receipt className="w-3.5 h-3.5 text-brand-orange" />
        <span className="text-[10px] font-bold text-brand-navy">
          Billmaster Software + Hardware Integration
        </span>
      </div>
    </div>
  );
};
