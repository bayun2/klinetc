// 数据意义：开盘(open)，收盘(close)，最低(lowest)，最高(highest)
var data = [
  {
    'categoryData': '2013/1/25',
    'series': [
      2300,
      2291.3,
      2288.26,
      2308.38
    ],
    'updown': '-28.96',
    'updownratio': '98.75%',
    'volume': '2996.57'
  },
  {
    'categoryData': '2013/1/28',
    'series': [
      2295.35,
      2346.5,
      2295.35,
      2346.92
    ],
    'updown': '55.2',
    'updownratio': '102.41%',
    'volume': '1172.23'
  },
  {
    'categoryData': '2013/1/29',
    'series': [
      2347.22,
      2358.98,
      2337.35,
      2363.8
    ],
    'updown': '12.48',
    'updownratio': '100.53%',
    'volume': '2614.75'
  },
  {
    'categoryData': '2013/1/30',
    'series': [
      2360.75,
      2382.48,
      2347.89,
      2383.76
    ],
    'updown': '23.50',
    'updownratio': '101.00%',
    'volume': '4417.40'
  },
  {
    'categoryData': '2013/1/31',
    'series': [
      2383.43,
      2385.42,
      2371.23,
      2391.82
    ],
    'updown': '2.94',
    'updownratio': '100.12%',
    'volume': '216.86'
  },
  {
    'categoryData': '2013/2/1',
    'series': [
      2377.41,
      2419.02,
      2369.57,
      2421.15
    ],
    'updown': '33.60',
    'updownratio': '101.41%',
    'volume': '2042.04'
  },
  {
    'categoryData': '2013/2/4',
    'series': [
      2425.92,
      2428.15,
      2417.58,
      2440.38
    ],
    'updown': '9.13',
    'updownratio': '100.38%',
    'volume': '1006.25'
  },
  {
    'categoryData': '2013/2/5',
    'series': [
      2411,
      2433.13,
      2403.3,
      2437.42
    ],
    'updown': '4.98',
    'updownratio': '100.21%',
    'volume': '1416.39'
  },
  {
    'categoryData': '2013/2/6',
    'series': [
      2432.68,
      2434.48,
      2427.7,
      2441.73
    ],
    'updown': '1.35',
    'updownratio': '100.06%',
    'volume': '3596.38'
  },
  {
    'categoryData': '2013/2/7',
    'series': [
      2430.69,
      2418.53,
      2394.22,
      2433.89
    ],
    'updown': '-15.95',
    'updownratio': '99.34%',
    'volume': '1532.75'
  },
  {
    'categoryData': '2013/2/8',
    'series': [
      2416.62,
      2432.4,
      2414.4,
      2443.03
    ],
    'updown': '13.87',
    'updownratio': '100.57%',
    'volume': '1583.65'
  },
  {
    'categoryData': '2013/2/18',
    'series': [
      2441.91,
      2421.56,
      2415.43,
      2444.8
    ],
    'updown': '-10.84',
    'updownratio': '99.55%',
    'volume': '4625.78'
  },
  {
    'categoryData': '2013/2/19',
    'series': [
      2420.26,
      2382.91,
      2373.53,
      2427.07
    ],
    'updown': '-38.65',
    'updownratio': '98.40%',
    'volume': '4390.87'
  },
  {
    'categoryData': '2013/2/20',
    'series': [
      2383.49,
      2397.18,
      2370.61,
      2397.94
    ],
    'updown': '14.27',
    'updownratio': '100.60%',
    'volume': '4863.99'
  },
  {
    'categoryData': '2013/2/21',
    'series': [
      2378.82,
      2325.95,
      2309.17,
      2378.82
    ],
    'updown': '-71.23',
    'updownratio': '97.03%',
    'volume': '2996.28'
  },
  {
    'categoryData': '2013/2/22',
    'series': [
      2322.94,
      2314.16,
      2308.76,
      2330.88
    ],
    'updown': '-11.79',
    'updownratio': '99.49%',
    'volume': '4219.31'
  },
  {
    'categoryData': '2013/2/25',
    'series': [
      2320.62,
      2325.82,
      2315.01,
      2338.78
    ],
    'updown': '11.66',
    'updownratio': '100.50%',
    'volume': '713.10'
  },
  {
    'categoryData': '2013/2/26',
    'series': [
      2313.74,
      2293.34,
      2289.89,
      2340.71
    ],
    'updown': '-32.48',
    'updownratio': '98.60%',
    'volume': '4815.50'
  },
  {
    'categoryData': '2013/2/27',
    'series': [
      2297.77,
      2313.22,
      2292.03,
      2324.63
    ],
    'updown': '19.88',
    'updownratio': '100.87%',
    'volume': '4015.58'
  },
  {
    'categoryData': '2013/2/28',
    'series': [
      2322.32,
      2365.59,
      2308.92,
      2366.16
    ],
    'updown': '52.37',
    'updownratio': '102.26%',
    'volume': '1357.51'
  },
  {
    'categoryData': '2013/3/1',
    'series': [
      2364.54,
      2359.51,
      2330.86,
      2369.65
    ],
    'updown': '-6.08',
    'updownratio': '99.74%',
    'volume': '1602.68'
  },
  {
    'categoryData': '2013/3/4',
    'series': [
      2332.08,
      2273.4,
      2259.25,
      2333.54
    ],
    'updown': '-86.11',
    'updownratio': '96.35%',
    'volume': '1043.61'
  },
  {
    'categoryData': '2013/3/5',
    'series': [
      2274.81,
      2326.31,
      2270.1,
      2328.14
    ],
    'updown': '52.91',
    'updownratio': '102.33%',
    'volume': '333.64'
  },
  {
    'categoryData': '2013/3/6',
    'series': [
      2333.61,
      2347.18,
      2321.6,
      2351.44
    ],
    'updown': '20.87',
    'updownratio': '100.90%',
    'volume': '4231.24'
  },
  {
    'categoryData': '2013/3/7',
    'series': [
      2340.44,
      2324.29,
      2304.27,
      2352.02
    ],
    'updown': '-22.89',
    'updownratio': '99.02%',
    'volume': '2052.01'
  },
  {
    'categoryData': '2013/3/8',
    'series': [
      2326.42,
      2318.61,
      2314.59,
      2333.67
    ],
    'updown': '-5.68',
    'updownratio': '99.76%',
    'volume': '3202.22'
  },
  {
    'categoryData': '2013/3/11',
    'series': [
      2314.68,
      2310.59,
      2296.58,
      2320.96
    ],
    'updown': '-8.02',
    'updownratio': '99.65%',
    'volume': '549.98'
  },
  {
    'categoryData': '2013/3/12',
    'series': [
      2309.16,
      2286.6,
      2264.83,
      2333.29
    ],
    'updown': '-23.99',
    'updownratio': '98.96%',
    'volume': '2673.57'
  },
  {
    'categoryData': '2013/3/13',
    'series': [
      2282.17,
      2263.97,
      2253.25,
      2286.33
    ],
    'updown': '-22.63',
    'updownratio': '99.01%',
    'volume': '3218.68'
  },
  {
    'categoryData': '2013/3/14',
    'series': [
      2255.77,
      2270.28,
      2253.31,
      2276.22
    ],
    'updown': '6.31',
    'updownratio': '100.28%',
    'volume': '638.15'
  },
  {
    'categoryData': '2013/3/15',
    'series': [
      2269.31,
      2278.4,
      2250,
      2312.08
    ],
    'updown': '8.12',
    'updownratio': '100.36%',
    'volume': '3324.72'
  },
  {
    'categoryData': '2013/3/18',
    'series': [
      2267.29,
      2240.02,
      2239.21,
      2276.05
    ],
    'updown': '-38.38',
    'updownratio': '98.32%',
    'volume': '2185.17'
  },
  {
    'categoryData': '2013/3/19',
    'series': [
      2244.26,
      2257.43,
      2232.02,
      2261.31
    ],
    'updown': '17.41',
    'updownratio': '100.78%',
    'volume': '1901.87'
  },
  {
    'categoryData': '2013/3/20',
    'series': [
      2257.74,
      2317.37,
      2257.42,
      2317.86
    ],
    'updown': '59.94',
    'updownratio': '102.66%',
    'volume': '192.72'
  },
  {
    'categoryData': '2013/3/21',
    'series': [
      2318.21,
      2324.24,
      2311.6,
      2330.81
    ],
    'updown': '6.87',
    'updownratio': '100.30%',
    'volume': '3097.49'
  },
  {
    'categoryData': '2013/3/22',
    'series': [
      2321.4,
      2328.28,
      2314.97,
      2332
    ],
    'updown': '4.04',
    'updownratio': '100.17%',
    'volume': '3778.72'
  },
  {
    'categoryData': '2013/3/25',
    'series': [
      2334.74,
      2326.72,
      2319.91,
      2344.89
    ],
    'updown': '-1.56',
    'updownratio': '99.93%',
    'volume': '4980.31'
  },
  {
    'categoryData': '2013/3/26',
    'series': [
      2318.58,
      2297.67,
      2281.12,
      2319.99
    ],
    'updown': '-29.05',
    'updownratio': '98.75%',
    'volume': '4075.67'
  },
  {
    'categoryData': '2013/3/27',
    'series': [
      2299.38,
      2301.26,
      2289,
      2323.48
    ],
    'updown': '3.59',
    'updownratio': '100.16%',
    'volume': '3344.35'
  },
  {
    'categoryData': '2013/3/28',
    'series': [
      2273.55,
      2236.3,
      2232.91,
      2273.55
    ],
    'updown': '-64.96',
    'updownratio': '97.18%',
    'volume': '2885.61'
  },
  {
    'categoryData': '2013/3/29',
    'series': [
      2238.49,
      2236.62,
      2228.81,
      2246.87
    ],
    'updown': '0.32',
    'updownratio': '100.01%',
    'volume': '636.97'
  },
  {
    'categoryData': '2013/4/1',
    'series': [
      2229.46,
      2234.4,
      2227.31,
      2243.95
    ],
    'updown': '-2.22',
    'updownratio': '99.90%',
    'volume': '1091.23'
  },
  {
    'categoryData': '2013/4/2',
    'series': [
      2234.9,
      2227.74,
      2220.44,
      2253.42
    ],
    'updown': '-6.66',
    'updownratio': '99.70%',
    'volume': '2042.14'
  },
  {
    'categoryData': '2013/4/3',
    'series': [
      2232.69,
      2225.29,
      2217.25,
      2241.34
    ],
    'updown': '-2.45',
    'updownratio': '99.89%',
    'volume': '768.63'
  },
  {
    'categoryData': '2013/4/8',
    'series': [
      2196.24,
      2211.59,
      2180.67,
      2212.59
    ],
    'updown': '-13.70',
    'updownratio': '99.38%',
    'volume': '916.39'
  },
  {
    'categoryData': '2013/4/9',
    'series': [
      2215.47,
      2225.77,
      2215.47,
      2234.73
    ],
    'updown': '14.18',
    'updownratio': '100.64%',
    'volume': '4059.91'
  },
  {
    'categoryData': '2013/4/10',
    'series': [
      2224.93,
      2226.13,
      2212.56,
      2233.04
    ],
    'updown': '0.36',
    'updownratio': '100.02%',
    'volume': '3804.98'
  },
  {
    'categoryData': '2013/4/11',
    'series': [
      2236.98,
      2219.55,
      2217.26,
      2242.48
    ],
    'updown': '-6.58',
    'updownratio': '99.70%',
    'volume': '800.89'
  },
  {
    'categoryData': '2013/4/12',
    'series': [
      2218.09,
      2206.78,
      2204.44,
      2226.26
    ],
    'updown': '-12.77',
    'updownratio': '99.42%',
    'volume': '1246.50'
  },
  {
    'categoryData': '2013/4/15',
    'series': [
      2199.91,
      2181.94,
      2177.39,
      2204.99
    ],
    'updown': '-24.84',
    'updownratio': '98.87%',
    'volume': '2280.93'
  },
  {
    'categoryData': '2013/4/16',
    'series': [
      2169.63,
      2194.85,
      2165.78,
      2196.43
    ],
    'updown': '12.91',
    'updownratio': '100.59%',
    'volume': '2343.33'
  },
  {
    'categoryData': '2013/4/17',
    'series': [
      2195.03,
      2193.8,
      2178.47,
      2197.51
    ],
    'updown': '-1.05',
    'updownratio': '99.95%',
    'volume': '4408.45'
  },
  {
    'categoryData': '2013/4/18',
    'series': [
      2181.82,
      2197.6,
      2175.44,
      2206.03
    ],
    'updown': '3.8',
    'updownratio': '100.17%',
    'volume': '4444.95'
  },
  {
    'categoryData': '2013/4/19',
    'series': [
      2201.12,
      2244.64,
      2200.58,
      2250.11
    ],
    'updown': '47.04',
    'updownratio': '102.14%',
    'volume': '2568.10'
  },
  {
    'categoryData': '2013/4/22',
    'series': [
      2236.4,
      2242.17,
      2232.26,
      2245.12
    ],
    'updown': '-2.47',
    'updownratio': '99.89%',
    'volume': '896.72'
  },
  {
    'categoryData': '2013/4/23',
    'series': [
      2242.62,
      2184.54,
      2182.81,
      2242.62
    ],
    'updown': '-57.63',
    'updownratio': '97.43%',
    'volume': '2301.15'
  },
  {
    'categoryData': '2013/4/24',
    'series': [
      2187.35,
      2218.32,
      2184.11,
      2226.12
    ],
    'updown': '33.78',
    'updownratio': '101.55%',
    'volume': '3988.94'
  },
  {
    'categoryData': '2013/4/25',
    'series': [
      2213.19,
      2199.31,
      2191.85,
      2224.63
    ],
    'updown': '-19.01',
    'updownratio': '99.14%',
    'volume': '2459.50'
  },
  {
    'categoryData': '2013/4/26',
    'series': [
      2203.89,
      2177.91,
      2173.86,
      2210.58
    ],
    'updown': '-21.40',
    'updownratio': '99.03%',
    'volume': '3845.91'
  },
  {
    'categoryData': '2013/5/2',
    'series': [
      2170.78,
      2174.12,
      2161.14,
      2179.65
    ],
    'updown': '-3.79',
    'updownratio': '99.83%',
    'volume': '4959.30'
  },
  {
    'categoryData': '2013/5/3',
    'series': [
      2179.05,
      2205.5,
      2179.05,
      2222.81
    ],
    'updown': '31.38',
    'updownratio': '101.44%',
    'volume': '3816.04'
  },
  {
    'categoryData': '2013/5/6',
    'series': [
      2212.5,
      2231.17,
      2212.5,
      2236.07
    ],
    'updown': '25.67',
    'updownratio': '101.16%',
    'volume': '1249.34'
  },
  {
    'categoryData': '2013/5/7',
    'series': [
      2227.86,
      2235.57,
      2219.44,
      2240.26
    ],
    'updown': '4.40',
    'updownratio': '100.20%',
    'volume': '4364.72'
  },
  {
    'categoryData': '2013/5/8',
    'series': [
      2242.39,
      2246.3,
      2235.42,
      2255.21
    ],
    'updown': '10.73',
    'updownratio': '100.48%',
    'volume': '4551.14'
  },
  {
    'categoryData': '2013/5/9',
    'series': [
      2246.96,
      2232.97,
      2221.38,
      2247.86
    ],
    'updown': '-13.33',
    'updownratio': '99.41%',
    'volume': '4819.15'
  },
  {
    'categoryData': '2013/5/10',
    'series': [
      2228.82,
      2246.83,
      2225.81,
      2247.67
    ],
    'updown': '13.86',
    'updownratio': '100.62%',
    'volume': '2041.58'
  },
  {
    'categoryData': '2013/5/13',
    'series': [
      2247.68,
      2241.92,
      2231.36,
      2250.85
    ],
    'updown': '-4.91',
    'updownratio': '99.78%',
    'volume': '1777.47'
  },
  {
    'categoryData': '2013/5/14',
    'series': [
      2238.9,
      2217.01,
      2205.87,
      2239.93
    ],
    'updown': '-24.91',
    'updownratio': '98.89%',
    'volume': '4364.83'
  },
  {
    'categoryData': '2013/5/15',
    'series': [
      2217.09,
      2224.8,
      2213.58,
      2225.19
    ],
    'updown': '7.79',
    'updownratio': '100.35%',
    'volume': '247.84'
  },
  {
    'categoryData': '2013/5/16',
    'series': [
      2221.34,
      2251.81,
      2210.77,
      2252.87
    ],
    'updown': '27.01',
    'updownratio': '101.21%',
    'volume': '3385.05'
  },
  {
    'categoryData': '2013/5/17',
    'series': [
      2249.81,
      2282.87,
      2248.41,
      2288.09
    ],
    'updown': '31.06',
    'updownratio': '101.38%',
    'volume': '942.13'
  },
  {
    'categoryData': '2013/5/20',
    'series': [
      2286.33,
      2299.99,
      2281.9,
      2309.39
    ],
    'updown': '17.12',
    'updownratio': '100.75%',
    'volume': '4481.63'
  },
  {
    'categoryData': '2013/5/21',
    'series': [
      2297.11,
      2305.11,
      2290.12,
      2305.3
    ],
    'updown': '5.12',
    'updownratio': '100.22%',
    'volume': '1596.24'
  },
  {
    'categoryData': '2013/5/22',
    'series': [
      2303.75,
      2302.4,
      2292.43,
      2314.18
    ],
    'updown': '-2.71',
    'updownratio': '99.88%',
    'volume': '688.18'
  },
  {
    'categoryData': '2013/5/23',
    'series': [
      2293.81,
      2275.67,
      2274.1,
      2304.95
    ],
    'updown': '-26.73',
    'updownratio': '98.84%',
    'volume': '4047.06'
  },
  {
    'categoryData': '2013/5/24',
    'series': [
      2281.45,
      2288.53,
      2270.25,
      2292.59
    ],
    'updown': '12.86',
    'updownratio': '100.57%',
    'volume': '4271.81'
  },
  {
    'categoryData': '2013/5/27',
    'series': [
      2286.66,
      2293.08,
      2283.94,
      2301.7
    ],
    'updown': '4.55',
    'updownratio': '100.20%',
    'volume': '3344.91'
  },
  {
    'categoryData': '2013/5/28',
    'series': [
      2293.4,
      2321.32,
      2281.47,
      2322.1
    ],
    'updown': '28.24',
    'updownratio': '101.23%',
    'volume': '1474.70'
  },
  {
    'categoryData': '2013/5/29',
    'series': [
      2323.54,
      2324.02,
      2321.17,
      2334.33
    ],
    'updown': '2.70',
    'updownratio': '100.12%',
    'volume': '1140.88'
  },
  {
    'categoryData': '2013/5/30',
    'series': [
      2316.25,
      2317.75,
      2310.49,
      2325.72
    ],
    'updown': '-6.27',
    'updownratio': '99.73%',
    'volume': '2750.29'
  },
  {
    'categoryData': '2013/5/31',
    'series': [
      2320.74,
      2300.59,
      2299.37,
      2325.53
    ],
    'updown': '-17.16',
    'updownratio': '99.26%',
    'volume': '124.50'
  },
  {
    'categoryData': '2013/6/3',
    'series': [
      2300.21,
      2299.25,
      2294.11,
      2313.43
    ],
    'updown': '-1.34',
    'updownratio': '99.94%',
    'volume': '398.70'
  },
  {
    'categoryData': '2013/6/4',
    'series': [
      2297.1,
      2272.42,
      2264.76,
      2297.1
    ],
    'updown': '-26.83',
    'updownratio': '98.83%',
    'volume': '4270.13'
  },
  {
    'categoryData': '2013/6/5',
    'series': [
      2270.71,
      2270.93,
      2260.87,
      2276.86
    ],
    'updown': '-1.49',
    'updownratio': '99.93%',
    'volume': '1288.18'
  },
  {
    'categoryData': '2013/6/6',
    'series': [
      2264.43,
      2242.11,
      2240.07,
      2266.69
    ],
    'updown': '-28.82',
    'updownratio': '98.73%',
    'volume': '1571.77'
  },
  {
    'categoryData': '2013/6/7',
    'series': [
      2242.26,
      2210.9,
      2205.07,
      2250.63
    ],
    'updown': '-31.21',
    'updownratio': '98.61%',
    'volume': '1260.40'
  },
  {
    'categoryData': '2013/6/13',
    'series': [
      2190.1,
      2148.35,
      2126.22,
      2190.1
    ],
    'updown': '-62.55',
    'updownratio': '97.17%',
    'volume': '2656.95'
  }
];

module.exports = data
