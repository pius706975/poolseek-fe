interface QABackgroundProps {
    className?: string;
}

export default function QABackground({ className = '' }: QABackgroundProps) {
    return (
        <div className={`w-full h-full overflow-hidden relative ${className}`}>
            <svg
                className="w-full h-full absolute inset-0"
                viewBox="0 0 1200 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice">
                {/* Background gradient */}
                <rect
                    width="1200"
                    height="800"
                    className="fill-white dark:fill-gray-950"
                />

                {/* Question card 1 */}
                <g className="opacity-90 dark:opacity-20">
                    <rect
                        x="120"
                        y="150"
                        width="120"
                        height="120"
                        rx="24"
                        className="fill-[#4169E1]/10 dark:fill-[#4169E1]/30"
                        filter="drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1))"
                    />
                    <path
                        d="M180 190C180 183 187 176 195 176C203 176 210 183 210 190C210 197 203 204 195 204V220"
                        className="stroke-[#4169E1] dark:stroke-[#4169E1]"
                        strokeWidth="12"
                        strokeLinecap="round"
                    />
                    <circle
                        cx="195"
                        cy="240"
                        r="6"
                        className="fill-[#4169E1] dark:fill-[#4169E1]"
                    />
                </g>

                {/* Content lines 1 */}
                <g className="opacity-80 dark:opacity-15">
                    <rect
                        x="280"
                        y="170"
                        width="300"
                        height="16"
                        rx="8"
                        className="fill-[#4169E1]/20 dark:fill-[#4169E1]/40"
                    />
                    <rect
                        x="280"
                        y="200"
                        width="250"
                        height="16"
                        rx="8"
                        className="fill-[#4169E1]/15 dark:fill-[#4169E1]/30"
                    />
                    <rect
                        x="280"
                        y="230"
                        width="200"
                        height="16"
                        rx="8"
                        className="fill-[#4169E1]/10 dark:fill-[#4169E1]/20"
                    />
                </g>

                {/* Question card 2 */}
                <g className="opacity-90 dark:opacity-20">
                    <rect
                        x="980"
                        y="400"
                        width="120"
                        height="120"
                        rx="24"
                        className="fill-[#4169E1]/10 dark:fill-[#4169E1]/30"
                        filter="drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1))"
                    />
                    <path
                        d="M1040 440C1040 433 1047 426 1055 426C1063 426 1070 433 1070 440C1070 447 1063 454 1055 454V470"
                        className="stroke-[#4169E1] dark:stroke-[#4169E1]"
                        strokeWidth="12"
                        strokeLinecap="round"
                    />
                    <circle
                        cx="1055"
                        cy="490"
                        r="6"
                        className="fill-[#4169E1] dark:fill-[#4169E1]"
                    />
                </g>

                {/* Content lines 2 */}
                <g className="opacity-80 dark:opacity-15">
                    <rect
                        x="680"
                        y="420"
                        width="280"
                        height="16"
                        rx="8"
                        className="fill-[#4169E1]/20 dark:fill-[#4169E1]/40"
                    />
                    <rect
                        x="680"
                        y="450"
                        width="230"
                        height="16"
                        rx="8"
                        className="fill-[#4169E1]/15 dark:fill-[#4169E1]/30"
                    />
                    <rect
                        x="680"
                        y="480"
                        width="180"
                        height="16"
                        rx="8"
                        className="fill-[#4169E1]/10 dark:fill-[#4169E1]/20"
                    />
                </g>

                {/* Question card 3 */}
                <g className="opacity-90 dark:opacity-20">
                    <rect
                        x="120"
                        y="600"
                        width="120"
                        height="120"
                        rx="24"
                        className="fill-[#4169E1]/10 dark:fill-[#4169E1]/30"
                        filter="drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.1))"
                    />
                    <path
                        d="M180 640C180 633 187 626 195 626C203 626 210 633 210 640C210 647 203 654 195 654V670"
                        className="stroke-[#4169E1] dark:stroke-[#4169E1]"
                        strokeWidth="12"
                        strokeLinecap="round"
                    />
                    <circle
                        cx="195"
                        cy="690"
                        r="6"
                        className="fill-[#4169E1] dark:fill-[#4169E1]"
                    />
                </g>

                {/* Content lines 3 */}
                <g className="opacity-80 dark:opacity-15">
                    <rect
                        x="280"
                        y="620"
                        width="300"
                        height="16"
                        rx="8"
                        className="fill-[#4169E1]/20 dark:fill-[#4169E1]/40"
                    />
                    <rect
                        x="280"
                        y="650"
                        width="250"
                        height="16"
                        rx="8"
                        className="fill-[#4169E1]/15 dark:fill-[#4169E1]/30"
                    />
                    <rect
                        x="280"
                        y="680"
                        width="200"
                        height="16"
                        rx="8"
                        className="fill-[#4169E1]/10 dark:fill-[#4169E1]/20"
                    />
                </g>

                {/* Floating question marks */}
                <g className="opacity-40 dark:opacity-10">
                    <path
                        d="M400 100C400 93 407 86 415 86C423 86 430 93 430 100C430 107 423 114 415 114V130"
                        className="stroke-[#4169E1] dark:stroke-[#4169E1]"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                    <circle
                        cx="415"
                        cy="145"
                        r="4"
                        className="fill-[#4169E1] dark:fill-[#4169E1]"
                    />
                </g>

                <g className="opacity-30 dark:opacity-10">
                    <path
                        d="M800 200C800 193 807 186 815 186C823 186 830 193 830 200C830 207 823 214 815 214V230"
                        className="stroke-[#4169E1] dark:stroke-[#4169E1]"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                    <circle
                        cx="815"
                        cy="245"
                        r="4"
                        className="fill-[#4169E1] dark:fill-[#4169E1]"
                    />
                </g>

                <g className="opacity-20 dark:opacity-5">
                    <path
                        d="M900 500C900 493 907 486 915 486C923 486 930 493 930 500C930 507 923 514 915 514V530"
                        className="stroke-[#4169E1] dark:stroke-[#4169E1]"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                    <circle
                        cx="915"
                        cy="545"
                        r="4"
                        className="fill-[#4169E1] dark:fill-[#4169E1]"
                    />
                </g>

                <g className="opacity-25 dark:opacity-8">
                    <path
                        d="M500 700C500 693 507 686 515 686C523 686 530 693 530 700C530 707 523 714 515 714V730"
                        className="stroke-[#4169E1] dark:stroke-[#4169E1]"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                    <circle
                        cx="515"
                        cy="745"
                        r="4"
                        className="fill-[#4169E1] dark:fill-[#4169E1]"
                    />
                </g>
            </svg>
        </div>
    );
}
