'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from 'next-themes';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface TotalEarningWeeklyChartProps {
    labels: string[];
    datasets: number[];
    totalEarning: string;
}

const TotalEarningWeeklyChart: React.FC<TotalEarningWeeklyChartProps> = ({
    labels,
    datasets,
    totalEarning,
}) => {
    const { theme } = useTheme();
    const isDarkMode = theme === 'dark';

    const chartOptions: ApexOptions = {
        chart: {
            type: 'bar',
            toolbar: { show: false },
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
                borderRadius: 5,
            },
        },
        xaxis: {
            categories: labels,
            labels: {
                style: {
                    colors: isDarkMode ? '#fff' : '#333',
                },
            },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            show: false,
        },
        grid: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                gradientToColors: isDarkMode ? ['#9aff9a'] : ['#00ff55'],
                stops: [0, 100],
            },
        },
        tooltip: {
            theme: isDarkMode ? 'dark' : 'light',
        },
        colors: ['#25bc5b', '#1e9c49'],
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-4 bg-gray-200 dark:bg-[#151515] rounded-lg shadow-md border dark:border-gray-600 shadow-gray-400 dark:shadow-none">
            <div className="bg-gray-200 dark:bg-[#151515] p-3 rounded-md">
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
            <div>
                <Chart
                    options={chartOptions}
                    series={[{ name: 'Earnings', data: datasets }]}
                    type="bar"
                    height={235}
                />
            </div>
        </div>
    );
};

export default TotalEarningWeeklyChart;
