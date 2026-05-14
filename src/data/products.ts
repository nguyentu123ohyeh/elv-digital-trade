export type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  model: string;
  shortDescription: string;
  fullDescription: string;
  specifications: Record<string, string>;
  image: string;
  gallery: string[];
  applications: string[];
  packagingInfo: string;
  availabilityStatus: "In Stock" | "Inquiry" | "Pre-Order";
};

export const CATEGORIES = [
  "CPU & Processors",
  "RAM Memory",
  "SSD & Storage",
  "Motherboards",
  "Graphics Cards",
  "Power Supplies",
  "Cooling Components",
  "Computer Accessories",
  "Networking Devices",
] as const;

const img = (q: string) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=900&q=80`;

const PH = {
  ssd: img("photo-1591488320449-011701bb6704"),
  ram: img("photo-1562976540-1502c2145186"),
  cpu: img("photo-1555617981-dac3880eac6e"),
  mobo: img("photo-1518770660439-4636190af475"),
  gpu: img("photo-1587202372775-e229f172b9d7"),
  psu: img("photo-1587202372616-b43abea06c2a"),
  cool: img("photo-1587202372634-32705e3bf49c"),
  acc: img("photo-1527443224154-c4a3942d3acf"),
  net: img("photo-1544197150-b99a580bb7a8"),
};

const make = (
  id: number,
  name: string,
  category: string,
  model: string,
  shortDescription: string,
  specs: Record<string, string>,
  image: string,
): Product => ({
  id,
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  name,
  category,
  model,
  shortDescription,
  fullDescription:
    "This product is suitable for computer assembly, repair, hardware upgrade, reseller supply, and B2B procurement requirements. Sourced through reliable supply channels and prepared for export-grade distribution.",
  specifications: specs,
  image,
  gallery: [image, image, image],
  applications: [
    "Desktop PC assembly",
    "Office computer upgrade",
    "Gaming computer configuration",
    "Repair and replacement supply",
    "Reseller inventory",
  ],
  packagingInfo:
    "Standard export carton packaging. Bulk order support available. Model and quantity confirmation required before quotation.",
  availabilityStatus: id % 5 === 0 ? "Inquiry" : id % 7 === 0 ? "Pre-Order" : "In Stock",
});

export const PRODUCTS: Product[] = [
  make(1, "512GB PCIe NVMe Gen 4 SSD", "SSD & Storage", "DLG-NVME-512G4",
    "High-speed Gen 4 NVMe storage for modern desktops and workstations.",
    { Capacity: "512GB", Interface: "PCIe Gen 4 x4", "Form Factor": "M.2 2280", "Read Speed": "Up to 5000 MB/s", "Write Speed": "Up to 4200 MB/s", Endurance: "300 TBW" }, PH.ssd),
  make(2, "1TB PCIe NVMe SSD", "SSD & Storage", "DLG-NVME-1TB",
    "Reliable 1TB NVMe SSD for general-purpose and enterprise builds.",
    { Capacity: "1TB", Interface: "PCIe Gen 3 x4", "Form Factor": "M.2 2280", "Read Speed": "Up to 3500 MB/s", "Write Speed": "Up to 3000 MB/s" }, PH.ssd),
  make(3, "DDR4 8GB Desktop RAM", "RAM Memory", "DLG-DDR4-8G-3200",
    "DDR4 desktop memory module suitable for office and reseller supply.",
    { Capacity: "8GB", Type: "DDR4 UDIMM", Speed: "3200 MHz", Voltage: "1.2V", CAS: "CL16" }, PH.ram),
  make(4, "DDR4 16GB Desktop RAM", "RAM Memory", "DLG-DDR4-16G-3200",
    "16GB DDR4 module for performance desktops and workstations.",
    { Capacity: "16GB", Type: "DDR4 UDIMM", Speed: "3200 MHz", Voltage: "1.2V", CAS: "CL16" }, PH.ram),
  make(5, "DDR5 16GB Desktop RAM", "RAM Memory", "DLG-DDR5-16G-5600",
    "Next-gen DDR5 module for latest-generation builds.",
    { Capacity: "16GB", Type: "DDR5 UDIMM", Speed: "5600 MHz", Voltage: "1.1V", CAS: "CL40" }, PH.ram),
  make(6, "Intel-compatible Motherboard", "Motherboards", "DLG-MB-LGA1700",
    "ATX motherboard supporting current-gen Intel desktop processors.",
    { Socket: "LGA1700", Chipset: "B760", "Form Factor": "ATX", "Memory Slots": "4 x DDR4", "M.2 Slots": "2", "Network": "2.5GbE" }, PH.mobo),
  make(7, "AMD-compatible Motherboard", "Motherboards", "DLG-MB-AM4",
    "AM4 motherboard for Ryzen desktop processor builds.",
    { Socket: "AM4", Chipset: "B550", "Form Factor": "ATX", "Memory Slots": "4 x DDR4", "M.2 Slots": "2" }, PH.mobo),
  make(8, "650W ATX Power Supply", "Power Supplies", "DLG-PSU-650",
    "650W non-modular ATX power supply for standard PC assemblies.",
    { Wattage: "650W", Efficiency: "80+ Bronze", Modularity: "Non-Modular", "Form Factor": "ATX", "Fan Size": "120mm" }, PH.psu),
  make(9, "750W Modular Power Supply", "Power Supplies", "DLG-PSU-750M",
    "Fully modular 750W PSU with stable rails for performance builds.",
    { Wattage: "750W", Efficiency: "80+ Gold", Modularity: "Full Modular", "Form Factor": "ATX" }, PH.psu),
  make(10, "CPU Air Cooler", "Cooling Components", "DLG-AIR-120",
    "Tower-style air cooler with 120mm PWM fan.",
    { Type: "Air Tower", "Fan Size": "120mm", TDP: "180W", Sockets: "Intel/AMD universal" }, PH.cool),
  make(11, "Liquid CPU Cooler", "Cooling Components", "DLG-AIO-240",
    "240mm AIO liquid cooler for higher-TDP processors.",
    { Type: "AIO Liquid", "Radiator Size": "240mm", TDP: "250W", Pump: "Ceramic Bearing" }, PH.cool),
  make(12, "Entry-Level Graphics Card", "Graphics Cards", "DLG-GPU-E1",
    "Entry-level GPU for office and light gaming systems.",
    { Memory: "4GB GDDR6", Interface: "PCIe 4.0 x8", Outputs: "HDMI / DP", Power: "75W" }, PH.gpu),
  make(13, "Mid-Range Graphics Card", "Graphics Cards", "DLG-GPU-M1",
    "Mid-range GPU suitable for mainstream gaming and creator workloads.",
    { Memory: "8GB GDDR6", Interface: "PCIe 4.0 x16", Outputs: "HDMI / 3x DP", Power: "180W" }, PH.gpu),
  make(14, "High-Performance Graphics Card", "Graphics Cards", "DLG-GPU-H1",
    "High-end GPU for performance gaming and professional applications.",
    { Memory: "12GB GDDR6X", Interface: "PCIe 4.0 x16", Outputs: "HDMI / 3x DP", Power: "285W" }, PH.gpu),
  make(15, "SATA 2.5 Inch SSD", "SSD & Storage", "DLG-SATA-480",
    "480GB SATA SSD for upgrades and replacement supply.",
    { Capacity: "480GB", Interface: "SATA III", "Form Factor": "2.5 inch", "Read Speed": "550 MB/s" }, PH.ssd),
  make(16, "External Hard Drive Enclosure", "Computer Accessories", "DLG-ENC-25",
    "USB 3.2 enclosure for 2.5-inch SATA drives.",
    { Drive: "2.5\" SATA", Interface: "USB 3.2 Gen 1", Material: "Aluminum" }, PH.acc),
  make(17, "USB-C Docking Station", "Computer Accessories", "DLG-DOCK-9P",
    "9-in-1 USB-C docking station for laptops and mobile workstations.",
    { Ports: "HDMI, VGA, 3x USB-A, USB-C PD, SD/TF, RJ45", "PD Charging": "100W" }, PH.acc),
  make(18, "Wireless Network Adapter", "Networking Devices", "DLG-WIFI-AX",
    "Dual-band Wi-Fi 6 USB adapter for desktop networking upgrades.",
    { Standard: "Wi-Fi 6 (802.11ax)", Speed: "1800 Mbps", Interface: "USB 3.0" }, PH.net),
  make(19, "Gigabit Ethernet Switch", "Networking Devices", "DLG-SW-08G",
    "8-port unmanaged gigabit switch for office networking.",
    { Ports: "8 x 10/100/1000", Type: "Unmanaged", Housing: "Metal" }, PH.net),
  make(20, "Thermal Paste", "Cooling Components", "DLG-TP-4G",
    "Performance thermal compound for CPU and GPU installations.",
    { Net: "4g", Conductivity: "8.5 W/mK", Application: "CPU / GPU" }, PH.cool),
  make(21, "Computer Case Fan", "Cooling Components", "DLG-FAN-120",
    "120mm PWM case fan with hydraulic bearing.",
    { Size: "120mm", Connector: "4-pin PWM", Bearing: "Hydraulic", Speed: "500-1500 RPM" }, PH.cool),
  make(22, "Mechanical Keyboard", "Computer Accessories", "DLG-KB-MX87",
    "TKL mechanical keyboard with hot-swap blue switches.",
    { Layout: "TKL 87-Key", Switch: "Blue / Hot-swap", Backlight: "RGB", Connection: "USB-C" }, PH.acc),
  make(23, "Optical Mouse", "Computer Accessories", "DLG-MS-OP",
    "Wired optical mouse for office and reseller bulk supply.",
    { DPI: "1600", Buttons: "3", Connection: "USB" }, PH.acc),
  make(24, "HDMI Cable", "Computer Accessories", "DLG-HDMI-2M",
    "High-speed HDMI 2.0 cable, 2 meters.",
    { Length: "2 m", Version: "HDMI 2.0", Resolution: "4K @ 60Hz" }, PH.acc),
  make(25, "DisplayPort Cable", "Computer Accessories", "DLG-DP-2M",
    "DisplayPort 1.4 cable supporting 4K and high refresh rates.",
    { Length: "2 m", Version: "DP 1.4", Resolution: "4K @ 144Hz" }, PH.acc),
  make(26, "Laptop Memory Module", "RAM Memory", "DLG-SODIMM-8G",
    "8GB DDR4 SO-DIMM module for laptop and small-form-factor systems.",
    { Capacity: "8GB", Type: "DDR4 SO-DIMM", Speed: "3200 MHz" }, PH.ram),
  make(27, "M.2 SSD Heatsink", "Cooling Components", "DLG-M2-HS",
    "Aluminum heatsink for M.2 2280 NVMe SSD modules.",
    { Material: "Aluminum", Compatibility: "M.2 2280", "Thermal Pad": "Included" }, PH.cool),
];
