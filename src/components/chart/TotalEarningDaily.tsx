import React from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface TotalEarningDailyChartProps {
    labels: string[];
    datasets: number[];
    totalEarning: string;
}

const TotalEarningDailyChart: React.FC<TotalEarningDailyChartProps> = ({
    labels,
    datasets,
    totalEarning,
}) => {
    const { theme } = useTheme();

    const isDarkMode = theme === 'dark';
    const textColor = isDarkMode ? '#ffffff' : '#333333';
    const gridColor = isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)';

    const options: ApexOptions = {
        chart: {
            type: 'bar',
            toolbar: { show: false },
        },
        xaxis: {
            categories: labels,
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: { style: { colors: textColor } },
        },
        yaxis: {
            labels: {
                formatter: (value: number) => `$${value}`,
                style: { colors: textColor },
            },
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.3,
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 0.6,
                stops: [0, 100],
                colorStops: isDarkMode
                    ? [
                          { offset: 0, color: '#ffcc80', opacity: 1 },
                          { offset: 100, color: '#ff9900', opacity: 0.6 },
                      ]
                    : [
                          { offset: 0, color: '#00ff55', opacity: 1 },
                          { offset: 100, color: '#00ff55', opacity: 0.6 },
                      ],
            },
        },
        dataLabels: {
            enabled: false,
        },
        plotOptions: {
            bar: {
                borderRadius: 5,
                columnWidth: '60%',
            },
        },
        grid: {
            borderColor: gridColor,
        },
        tooltip: {
            theme: isDarkMode ? 'dark' : 'light',
            style: {
                fontSize: '12px',
                fontFamily: 'inherit',
            },
        },
    };

    const series = [
        {
            name: 'Earnings',
            data: datasets,
        },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-4 bg-gray-200 dark:bg-[#151515] rounded-lg shadow-md border dark:border-gray-600 shadow-gray-400 dark:shadow-none mx-2 flex flex-col lg:flex-row gap-4">
            <div className="bg-gray-200 dark:bg-[#151515] p-3 rounded-md flex-1">
                <p className="font-semibold text-gray-700 dark:text-white">
                    Total Earnings
                </p>
                <h1 className="text-xl sm:text-2xl font-semibold dark:text-white">
                    {totalEarning}
                </h1>
                <p className="text-xs">
                    trend title <span className="text-green-500">+ 75.3%</span>
                </p>
            </div>
            <div className="w-full relative">
                <Chart
                    options={options}
                    series={series}
                    type="bar"
                    height={300}
                />
            </div>
        </div>
    );
};

export default TotalEarningDailyChart;
