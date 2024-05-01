

window.addEventListener("load", async () => {
    console.log("loaded");
    if (document.getElementById('solutionSecond--illustration--img')) {
        var chartDom = document.getElementById('solutionSecond--illustration--img');
        var myChart = echarts.init(chartDom);
        var option;

        const treeIcone =
            '/static/image/tree_ecosia.svg';
        var beginYear = 1000;
        var endYear = 1008;
        var lineCount = 4;
// Basic option:
        option = {
            color: ['#e54035'],
            xAxis: {
                axisLine: {show: false},
                axisLabel: {show: false},
                axisTick: {show: false},
                splitLine: {show: false},
                nameLocation: 'middle',
                nameGap: 40,
                nameTextStyle: {
                    color: 'green',
                    fontSize: 30,
                    fontFamily: 'Arial'
                },
                min: -2800,
                max: 2800
            },
            yAxis: {
                data: makeCategoryData(),
                show: false
            },
            grid: {
                top: 'center',
                height: 304
            },
            series: [
                {
                    name: 'all',
                    type: 'pictorialBar',
                    symbol: 'image://' + treeIcone,
                    symbolSize: [36, 55.5],
                    symbolRepeat: true,
                    data: makeSeriesData(beginYear),
                    animationEasing: 'elasticOut'
                },
                {
                    name: 'all',
                    type: 'pictorialBar',
                    symbol: 'image://' + treeIcone,
                    symbolSize: [36, 55.5],
                    symbolRepeat: true,
                    data: makeSeriesData(beginYear, true),
                    animationEasing: 'elasticOut'
                }
            ]
        };

        // Make fake data.

        function makeCategoryData() {
            var categoryData = [];
            for (var i = 0; i < lineCount; i++) {
                categoryData.push(i + 'a');
            }
            return categoryData;
        }

        function makeSeriesData(year, negative) {
            // make a fake value just for demo.
            var r = (year - beginYear + 1) * 24;
            var seriesData = [];

            for (var i = 0; i < lineCount; i++) {
                var sign = (negative ? -1 * (((i - 1) % 2) ? 0.66 : 1.79) : 1 * (((i + 2) % 2) ? 0.2 : 1.33));
                seriesData.push({
                    value: sign * 2 * (
                        year <= beginYear + 1
                            ? (Math.abs(i - lineCount / 2 + 0.5) < lineCount / 5 ? 5 : 0)
                            : (lineCount - Math.abs(i - lineCount / 2 + 0.5)) * r
                    ),
                    symbolOffset: (i % 2) ['50%'],
                });
            }
            return seriesData;
        }


// Set dynamic data.
        var currentYear = beginYear;
        setInterval(function () {
            currentYear++;
            if (lineCount == 0) {
                lineCount = 4;
                currentYear = beginYear;
            }
            if (currentYear > endYear) {
                lineCount = 0;
            }
            myChart.setOption({
                xAxis: {
                    name: currentYear
                },
                series: [{
                    data: makeSeriesData(currentYear)
                }, {
                    data: makeSeriesData(currentYear, true)
                }]
            });
        }, 500);

        myChart.setOption(option);

    }
});