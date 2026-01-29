"use client"
const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 w-full">
            {/* شكل الأنيميشن (Spinner) */}
            <div className="relative flex items-center justify-center">
                {/* الدائرة الخارجية */}
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
                {/* الدائرة الداخلية الثابتة */}
                <div className="absolute h-10 w-10 rounded-full border-4 border-dotted border-[#cdeaea] opacity-50"></div>
            </div>

            {/* النص العربي بتصميم نظيف */}
            <div className="flex flex-col items-center gap-2 text-center">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white tracking-tight">
                    جاري تجهيز المنتجات
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 animate-pulse">
                    لحظات ونكون معك...
                </p>
            </div>

            {/* لمسة إضافية: بار تحميل صغير (Progress Bar) */}
            <div className="w-48 h-1.5 bg-[#e6f4f4] dark:bg-[#1a3a3a] rounded-full overflow-hidden">
                <div className="h-full bg-primary animate-[loading_1.5s_ease-in-out_infinite] w-1/3 rounded-full"></div>
            </div>

            <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(150%); }
          100% { transform: translateX(-150%); }
        }
      `}</style>
        </div>
    );
}

export default Loading