// js/data.js

// 1. 系列定义 (Level 2: 中间层数据)
const seriesData = {
    "hps": {
        title: "HPS 热压烧结炉系列",
        description: "集真空、热压、高温烧结于一体，专为粉末冶金设计。提供多种压力吨位选择。",
        image: "https://placehold.co/800x400/e2e8f0/0F3A66?text=HPS+Series+Banner",
        // 这里定义该系列下包含哪些具体型号的ID
        models: ["hps-50-12", "hps-100-12", "hps-200-12"]
    },
   "ecf": {
        title: "ECF1系列 1700°C 箱式电阻炉",
        description: "采用优质硅钼棒为加热元件，最高温度1700°C。双层壳体结构，表面温度低，升温速度快，是高校、科研院所、工矿企业做高温烧结、金属退火、质量检测的理想设备。",
        image: "https://placehold.co/800x400/e2e8f0/0F3A66?text=ECF1+Series+Banner", // 记得替换为ECF的系列图
        // 这里列出了我们提取的三个代表性型号
        models: ["ecf-1-4-17", "ecf-1-6.4-17", "ecf-1-8-17"] 
    },
    "dmf": {
        title: "DMF 晶体生长炉系列",
        description: "科学温场设计，精密机械传动，用于人工晶体生长。",
        image: "https://placehold.co/800x400/e2e8f0/0F3A66?text=DMF+Series+Banner",
        models: ["dmf-1800"]
    },
    "gmt": {
        title: "GMT系列 升降式电阻炉",
        description: "采用独特的炉座升降式结构，配合多段可编程温控，是玻璃熔炼与陶瓷烧结的理想设备。结构新颖，操作简便。",
        image: "https://placehold.co/800x400/e2e8f0/0F3A66?text=GMT+Bottom+Loading+Furnace", // 请替换为GMT系列大图
        models: ["gmt-8-17", "gmt-14-17", "gmt-16-17"]
    }
};

// 2. 具体产品数据 (Level 3: 详情页数据)
const productData = {
    // === HPS 系列的具体型号 ===
    "hps-50-12": {
        title: "HPS-50-12型 热压烧结炉",
        tag: "5吨压力 / 1250°C",
        image: "https://placehold.co/600x600/e2e8f0/0F3A66?text=HPS-50-12",
        description: "入门级热压炉，适合小尺寸样品研发。5吨压力，Φ60mm压头。",
        features: ["最大压力 500kN (5吨)", "最高温度 1250°C", "压头直径 Φ60mm"],
        specs: [
            { label: "型号", value: "HPS-50-12" },
            { label: "加热功率", value: "5 kW" },
            { label: "电源", value: "220V / 50-60Hz" },
            { label: "工作室尺寸", value: "Φ200 × 300 mm" },
            { label: "最大压力", value: "500 kN" },
            { label: "压头直径", value: "Φ60 mm" }
        ],
        applications: ["陶瓷烧结", "扩散焊接"]
    },
    "hps-100-12": {
        title: "HPS-100-12型 热压烧结炉",
        tag: "10吨压力 / 1250°C",
        image: "https://placehold.co/600x600/e2e8f0/0F3A66?text=HPS-100-12",
        description: "中型热压炉，更大的工作室空间与压力。",
        features: ["最大压力 1000kN (10吨)", "最高温度 1250°C", "压头直径 Φ100mm"],
        specs: [
            { label: "型号", value: "HPS-100-12" },
            { label: "加热功率", value: "7.5 kW" },
            { label: "电源", value: "380V / 50-60Hz" },
            { label: "工作室尺寸", value: "Φ250 × 300 mm" },
            { label: "最大压力", value: "1000 kN" },
            { label: "压头直径", value: "Φ100 mm" }
        ],
        applications: ["陶瓷烧结", "扩散焊接"]
    },
    "hps-200-12": {
        title: "HPS-200-12型 热压烧结炉",
        tag: "20吨压力 / 1250°C",
        image: "https://placehold.co/600x600/e2e8f0/0F3A66?text=HPS-200-12",
        description: "大型热压炉，适合工业级批量生产或大尺寸材料制备。",
        features: ["最大压力 2000kN (20吨)", "最高温度 1250°C", "压头直径 Φ150mm"],
        specs: [
            { label: "型号", value: "HPS-200-12" },
            { label: "加热功率", value: "10 kW" },
            { label: "电源", value: "380V / 50-60Hz" },
            { label: "工作室尺寸", value: "Φ300 × 300 mm" },
            { label: "最大压力", value: "2000 kN" },
            { label: "压头直径", value: "Φ150 mm" }
        ],
        applications: ["陶瓷烧结", "扩散焊接"]
    },
    
   // === ECF 系列的具体型号 (根据图片数据录入) ===
    "ecf-1-4-17": {
        title: "ECF1-4-17型 箱式电阻炉",
        tag: "4kW / 1700°C",
        image: "https://placehold.co/600x600/e2e8f0/0F3A66?text=ECF1-4-17",
        description: "ECF系列入门款，小巧紧凑。4kW功率，适合小尺寸样品的快速烧结与热处理实验。",
        features: [
            "额定功率 4kW，升温迅速 (≤40min)",
            "最高温度 1700°C，长期工作温度 1600°C",
            "炉膛尺寸 200×120×120mm"
        ],
        specs: [
            { label: "产品型号", value: "ECF1-4-17" },
            { label: "额定功率", value: "4 kW" },
            { label: "电源电压", value: "220V / 50-60Hz" },
            { label: "工作室尺寸", value: "200×120×120 mm" },
            { label: "最高温度", value: "1700 °C" },
            { label: "空炉升温时间", value: "≤40 min" },
            { label: "温度均匀度", value: "≤±2.5 °C" },
            { label: "外形尺寸", value: "760×545×1400 mm" },
            { label: "重量(毛重)", value: "255 kg" }
        ],
        applications: ["陶瓷烧结", "金属退火", "新材料研发"]
    },

    "ecf-1-6.4-17": {
        title: "ECF1-6.4-17型 箱式电阻炉",
        tag: "6.4kW / 加长炉膛",
        image: "https://placehold.co/600x600/e2e8f0/0F3A66?text=ECF1-6.4-17",
        description: "中型规格，炉膛深度增加至320mm，适合长条形样品的处理，保持了优异的温度均匀性。",
        features: [
            "额定功率 6.4kW",
            "加深炉膛设计 (深度320mm)",
            "智能PID控制，控温波动 ±2°C"
        ],
        specs: [
            { label: "产品型号", value: "ECF1-6.4-17" },
            { label: "额定功率", value: "6.4 kW" },
            { label: "电源电压", value: "220V / 50-60Hz" },
            { label: "工作室尺寸", value: "320×120×120 mm" }, // 深度增加
            { label: "最高温度", value: "1700 °C" },
            { label: "空炉升温时间", value: "≤40 min" },
            { label: "温度均匀度", value: "≤±2.5 °C" },
            { label: "外形尺寸", value: "760×685×1400 mm" },
            { label: "重量(毛重)", value: "310 kg" }
        ],
        applications: ["长轴类零件热处理", "陶瓷棒材烧结"]
    },

    "ecf-1-8-17": {
        title: "ECF1-8-17型 箱式电阻炉",
        tag: "8kW / 380V工业电",
        image: "https://placehold.co/600x600/e2e8f0/0F3A66?text=ECF1-8-17",
        description: "该系列最大规格，采用380V两相供电，拥有最大的炉膛空间，适合批量生产或大尺寸样品。",
        features: [
            "大功率 8kW，需接380V电源",
            "最大炉膛空间 300×150×150mm",
            "适合中试放大及小批量生产"
        ],
        specs: [
            { label: "产品型号", value: "ECF1-8-17" },
            { label: "额定功率", value: "8 kW" },
            { label: "电源电压", value: "380V / 2相 / 50-60Hz" }, // 注意这里电压变了
            { label: "工作室尺寸", value: "300×150×150 mm" },
            { label: "最高温度", value: "1700 °C" },
            { label: "空炉升温时间", value: "≤60 min" }, // 升温时间变了
            { label: "温度均匀度", value: "≤±3.5 °C" }, // 均匀度变了
            { label: "外形尺寸", value: "850×690×1445 mm" },
            { label: "重量(毛重)", value: "345 kg" }
        ],
        applications: ["小批量陶瓷生产", "大型金属件热处理"]
    },
    "dmf-1800": {
        title: "DMF-1800 晶体炉",
        tag: "晶体生长系列",
        image: "https://placehold.co/600x600/e2e8f0/0F3A66?text=DMF+Crystal",
        description: "专为人工晶体生长设计，拥有极其精密的机械传动系统和科学的温场设计，适用于提拉法(Czochralski)生长各类氧化物晶体。",
        features: [
            "提拉速度控制精确，低至 0.1mm/h",
            "精密旋转系统，保证晶体生长界面平稳",
            "可选配自动化直径控制系统 (ADC)"
        ],
        specs: [
            { label: "产品型号", value: "DMF-1800 系列" },
            { label: "最高温度", value: "1800°C" },
            { label: "提拉速度", value: "0.1 ~ 100 mm/h" },
            { label: "旋转速度", value: "0 ~ 50 rpm" },
            { label: "坩埚尺寸", value: "Ø100mm - Ø300mm" },
            { label: "气氛控制", value: "氩气、氮气或真空" }
        ],
        applications: [
            "蓝宝石 (Sapphire) 单晶生长",
            "石榴石 (YAG) 激光晶体",
            "铌酸锂、钽酸锂等压电晶体",
            "闪烁晶体材料研发"
        ]
    },
    // --- GMT-8-17 ---
    "gmt-8-17": {
        title: "GMT-8-17型 升降式电阻炉",
        tag: "8kW / 升降行程900mm",
        image: "https://placehold.co/600x600/e2e8f0/0F3A66?text=GMT-8-17",
        description: "该系列的基础型号，适用于在自然气氛中进行玻璃熔炼、陶瓷材料工艺烧结。可按需选配搅拌器。",
        features: [
            "炉座升降式结构，装卸料方便",
            "最高温度 1700°C",
            "标配变压器 10.7 kVA"
        ],
        specs: [
            { label: "产品型号", value: "GMT-8-17型" },
            { label: "额定功率", value: "8 kW" },
            { label: "电源电压", value: "380V / 2相 / 50-60Hz" },
            { label: "工作室尺寸", value: "Φ150 × 150 mm (直径×高)" },
            { label: "最高温度", value: "1700 °C" },
            { label: "空炉升温时间", value: "≤220 min" },
            { label: "温度均匀度", value: "≤±5 °C" },
            { label: "炉座升降行程", value: "900 mm" },
            { label: "变压器规格", value: "380V/63V/170A (10.7kVA)" },
            { label: "外形尺寸", value: "820×1310×1920 mm" },
            { label: "重量(毛重)", value: "670 kg" }
        ],
        applications: ["玻璃熔炼", "陶瓷烧结", "高温实验"]
    },

    // --- GMT-14-17 ---
    "gmt-14-17": {
        title: "GMT-14-17型 升降式电阻炉",
        tag: "14kW / Φ200mm炉膛",
        image: "https://placehold.co/600x600/e2e8f0/0F3A66?text=GMT-14-17",
        description: "中型规格，功率提升至14kW，炉膛尺寸与升降行程均有增加，适合中等尺寸样品的制备。",
        features: [
            "升降行程增加至 950mm",
            "大功率 14kW，升温稳定",
            "温控波动仅 ±1°C"
        ],
        specs: [
            { label: "产品型号", value: "GMT-14-17型" },
            { label: "额定功率", value: "14 kW" },
            { label: "电源电压", value: "380V / 2相 / 50-60Hz" },
            { label: "工作室尺寸", value: "Φ200 × 200 mm (直径×高)" },
            { label: "最高温度", value: "1700 °C" },
            { label: "空炉升温时间", value: "≤250 min" },
            { label: "温度均匀度", value: "≤±5 °C" },
            { label: "炉座升降行程", value: "950 mm" },
            { label: "变压器规格", value: "380V/104V/170A (18.72kVA)" },
            { label: "外形尺寸", value: "870×1340×2030 mm" },
            { label: "重量(毛重)", value: "860 kg" }
        ],
        applications: ["玻璃熔炼", "陶瓷烧结", "冶金实验"]
    },

    // --- GMT-16-17 ---
    "gmt-16-17": {
        title: "GMT-16-17型 升降式电阻炉",
        tag: "16kW / 最大行程1米",
        image: "https://placehold.co/600x600/e2e8f0/0F3A66?text=GMT-16-17",
        description: "GMT系列中的大尺寸型号，拥有最大的炉膛直径(250mm)和1米的升降行程，满足更大规模的生产需求。",
        features: [
            "最大炉膛直径 Φ250mm",
            "升降行程达 1000mm",
            "配备大功率变压器 19.2 kVA"
        ],
        specs: [
            { label: "产品型号", value: "GMT-16-17型" },
            { label: "额定功率", value: "16 kW" },
            { label: "电源电压", value: "380V / 2相 / 50-60Hz" },
            { label: "工作室尺寸", value: "Φ250 × 200 mm (直径×高)" },
            { label: "最高温度", value: "1700 °C" },
            { label: "空炉升温时间", value: "≤250 min" },
            { label: "温度均匀度", value: "≤±7.5 °C" }, // 注意：根据图片，此项为7.5
            { label: "炉座升降行程", value: "1000 mm" },
            { label: "变压器规格", value: "380V/113V/170A (19.2kVA)" },
            { label: "外形尺寸", value: "930×1370×2030 mm" },
            { label: "重量(毛重)", value: "930 kg" }
        ],
        applications: ["批量陶瓷烧结", "大型玻璃熔炼", "建材行业生产"]
    },
};
