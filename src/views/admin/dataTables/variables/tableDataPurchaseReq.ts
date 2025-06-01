type RowObj = {
	purchaseName: string;
	quantity: string;
	unit: string;
	price: number;
	total: number;
    date: string;
	status: string;
	action: string;
};

const tableDataPurchaseReq: RowObj[] = [
	{
		purchaseName: 'PVC Pipe',
		quantity: '75 m',
		unit: 'Mechanic Staff',
		price: 1200000,
		total: 1200000,
		date: '2025-01-01',
		status: 'Approved',
		action: 'Approved'
	},
	{
		purchaseName: 'Ruler',
		quantity: '100 cm',
		unit: 'Administration Staff',
		price: 20000,
		total: 20000,
		date: '2025-01-01',
		status: 'Disable',
		action: 'Disable'
	},
	{
		purchaseName: 'Books',
		quantity: '10 Pcs',
		unit: 'Accounting Staff',
		price: 400000,
		total: 400000,
		date: '2025-01-01',
		status: 'Error',
		action: 'Error'
	},
	{
		purchaseName: 'Pencil',
		quantity: '10 Pcs',
		unit: 'Administration Staff',
		price: 50000,
		total: 50000,
		date: '2025-01-01',
		status: 'Approved',
		action: 'Approved'
	}
];
export default tableDataPurchaseReq;
