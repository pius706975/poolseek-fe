interface PoolSeekLogoProps {
    width?: number;
    height?: number;
    className?: string;
    showText?: boolean;
}

export default function PoolSeekLogo({
    width,
    height,
    className = '',
    showText = false,
}: PoolSeekLogoProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="15 15 250 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}>
            {/* Pool circles/ripples */}
            <circle cx="130" cy="140" r="70" fill="#4169E1" opacity="0.2" />
            <circle cx="130" cy="140" r="55" fill="#4169E1" opacity="0.3" />
            <circle cx="130" cy="140" r="40" fill="#4169E1" opacity="0.5" />
            <circle cx="130" cy="140" r="25" fill="#4169E1" />

            {/* Magnifying glass handle */}
            <path
                d="M170 180L210 220"
                stroke="#4169E1"
                strokeWidth="18"
                strokeLinecap="round"
            />

            {/* Magnifying glass circle */}
            <circle
                cx="130"
                cy="140"
                r="75"
                stroke="#4169E1"
                strokeWidth="12"
                fill="transparent"
            />

            {/* Question mark */}
            <path
                d="M125 125C125 120 130 115 135 115C140 115 145 120 145 125C145 130 140 135 135 135L135 145"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
            />
            <circle cx="135" cy="155" r="3" fill="white" />

            {/* Small floating question marks */}
            <g opacity="0.7">
                <path
                    d="M95 110C95 107 98 104 101 104C104 104 107 107 107 110C107 113 104 116 101 116L101 122"
                    stroke="#4169E1"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <circle cx="101" cy="127" r="1.5" fill="#4169E1" />
            </g>

            <g opacity="0.7">
                <path
                    d="M165 110C165 107 168 104 171 104C174 104 177 107 177 110C177 113 174 116 171 116L171 122"
                    stroke="#4169E1"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <circle cx="171" cy="127" r="1.5" fill="#4169E1" />
            </g>

            <g opacity="0.7">
                <path
                    d="M130 85C130 82 133 79 136 79C139 79 142 82 142 85C142 88 139 91 136 91L136 97"
                    stroke="#4169E1"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
                <circle cx="136" cy="102" r="1.5" fill="#4169E1" />
            </g>

            {/* Text */}
            {showText && (
                <text
                    x="130"
                    y="250"
                    fontFamily="Arial, sans-serif"
                    fontSize="24"
                    fontWeight="bold"
                    fill="#4169E1"
                    textAnchor="middle">
                    PoolSeek
                </text>
            )}
        </svg>
    );
}
