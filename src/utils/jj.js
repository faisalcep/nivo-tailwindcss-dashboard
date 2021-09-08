// ==================================SINGLE LINE CHART====================================

// export const lineChartDataFunc = (data) => {
//     const salesByDateGroup = _(data)
//         // .groupBy((x) => x.Order_Date)
//         .groupBy((x) => moment(x.Order_Date).startOf('month').format('YYYY-MM'))
//         .map((value, key) => ({ Order_Date: key, Sales: _.sumBy(value, 'Sales') }))
//         .value();

//     const salesByDate = [];
//     const salesByDateObj = {};
//     if (data.length > 0) {
//         salesByDateObj.id = 'SalesByDate';
//         salesByDateObj.data = salesByDateGroup.map(({ Order_Date, Sales }) => ({
//             x: Order_Date,
//             y: Sales,
//         }));
//     }
//     salesByDate.push(salesByDateObj);
//     return salesByDate;
// };

// ==================================MULTI LINE CHART====================================

// const monthYearData = sortedData.map((d) => {
//     const properties = {
//         ...d,
//         // Order_Date: d.Order_Date.slice(0, -3), or
//         Order_Date: moment(d.Order_Date).startOf('month').format('YYYY-MM'),
//     };
//     return properties;
// });

// const groupByRegionDate = [];

// // eslint-disable-next-line no-restricted-syntax
// for (const item of monthYearData) {
//     const { Region, Order_Date, Sales } = item;
//     let group = groupByRegionDate.find((v) => v.Region === Region);
//     if (!group) groupByRegionDate.push((group = { Region, data: [] }));

//     const groupItem = group.data.find((v) => v.Order_Date === Order_Date);

//     if (!groupItem) group.data.push({ Order_Date, Sales });
//     else groupItem.Sales += Sales;
// }

// const multiLineChartData = groupByRegionDate.map((d) => {
//     const properties = {
//         id: d.Region,
//         data: d.data.map((p) => {
//             const prop = {
//                 x: p.Order_Date,
//                 y: p.Sales,
//             };
//             return prop;
//         }),
//     };
//     return properties;
// });

// ==================================PIE CHART====================================:
// export const pieChartDataFunc = (data) => {
//     const groupByRegion = _(data)
//         .groupBy((x) => x.Region)
//         .map((value, key) => ({ id: key, value: _.sumBy(value, 'Sales') }))
//         .value();
//     return groupByRegion;
// };

// ==================================STACKED BAR CHART====================================:
// eslint-disable-next-line import/prefer-default-export
// export const stackedBarChartDataFunc = (data) => {
//     const stackedBarChartData = Object.values(
//         data.reduce((r, { Order_Date, Region, Sales }) => {
//             const date = Order_Date.substr(0, 7);
// // r[date] ??= { Order_Date: date, East: 0, South: 0, Central: 0, West: 0 };
//             r[date] === undefined || r[date] === null
//                 ? (r[date] = { Order_Date: date, East: 0, South: 0, Central: 0, West: 0 })
//                 : (r[date][Region] += Sales);
//             return r;
//         }, {})
//     );
//     return stackedBarChartData;
// };

// ==================================AREA BUMP CHART====================================:

// export const areaBumpDataFunc = (data) => {
//     const monthData = data.map((d) => {
//         const properties = {
//             ...d,
//             // Order_Date: d.Order_Date.slice(0, -3), or
//             Order_Date: moment(d.Order_Date).startOf('month').format('MMM'),
//         };
//         return properties;
//     });
//     const areaBump = [];

//     // eslint-disable-next-line no-restricted-syntax
//     for (const item of monthData) {
//         const { Region, Order_Date, Sales } = item;
//         let group = areaBump.find((v) => v.Region === Region);
//         if (!group) areaBump.push((group = { Region, data: [] }));

//         const groupItem = group.data.find((v) => v.Order_Date === Order_Date);

//         if (!groupItem) group.data.push({ Order_Date, Sales });
//         else groupItem.Sales += Sales;
//     }

//     const areaBumpData = areaBump.map((d) => {
//         const properties = {
//             id: d.Region,
//             data: d.data.map((p) => {
//                 const prop = {
//                     x: p.Order_Date,
//                     y: p.Sales,
//                 };
//                 return prop;
//             }),
//         };
//         return properties;
//     });
//     return areaBumpData;
// };

// ==================================SCATTER CHART WITH ONE DIMENSION AND TWO MEASURE====================================:

// export const scatterChartFunc = (data) => {
//     const salesProfitScatter = [];

//     // eslint-disable-next-line no-restricted-syntax
//     for (const item of data) {
//         const { Region, Sales, Profit } = item;
//         let group = salesProfitScatter.find((v) => v.Region === Region);
//         if (!group) salesProfitScatter.push((group = { Region, data: [] }));

//         // const groupItem = group.data.find((v) => v.Order_Date === Order_Date);
//         const groupItem = group.data;
//         groupItem.push({ Sales, Profit });
//         groupItem.Sales += Sales;
//         groupItem.Profit += Profit;
//     }

//     const salesProfitData = salesProfitScatter.map((d) => {
//         const properties = {
//             id: d.Region,
//             data: d.data.map((p) => {
//                 const prop = {
//                     x: p.Sales,
//                     y: p.Profit,
//                 };
//                 return prop;
//             }),
//         };
//         return properties;
//     });

//     return salesProfitData;
// };

// ==================================SCATTER CHART WITH TWO MEASURE====================================:
// export const scatterChartFunc = (data, measureName1, measureName2) => {
//     const measures = [];
//     const measuresObj = {};
//     if (data.length > 0) {
//         measuresObj.id = `${measureName1} and ${measureName2}`;
//         measuresObj.data = data.map(({ [measureName1]: measure1, [measureName2]: measure2 }) => ({
//             x: measure1,
//             y: measure2,
//         }));
//     }
//     measures.push(measuresObj);
//     return measures;
// };

// ==================================TOP 5 BAR CHART====================================:

// export const barChartTopDataFunc = (data) => {
//     const groupBySubcategory = _(data)
//         .groupBy((x) => x.Sub_Category)
//         .map((value, key) => ({ Sub_Category: key, Sales: _.sumBy(value, 'Sales') }))
//         .value();
//     const subcategorySortedBySales = groupBySubcategory.sort((a, b) => b.Sales - a.Sales);
//     const topSalesSubCategory = subcategorySortedBySales.slice(0, 5).reverse();
//     return topSalesSubCategory;
// };