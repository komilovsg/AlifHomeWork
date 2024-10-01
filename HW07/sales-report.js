class SalesReport {
  constructor() {
    this.sales = new Set();
  }

  addSale(propertyId, saleDate) {
    const saleRecord = `${propertyId} - ${saleDate}`;
    if (this.sales.has(saleRecord)) {
      console.log(
        `Запись о продаже квартиры ${propertyId} на дату ${saleDate} уже существует.`
      );
    } else {
      this.sales.add(saleRecord);
      console.log(`Запись о продаже добавлена: ${saleRecord}`);
    }
  }

  removeSale(propertyId, saleDate) {
    const saleRecord = `${propertyId} - ${saleDate}`;
    if (this.sales.has(saleRecord)) {
      this.sales.delete(saleRecord);
      console.log(`Запись о продаже удалена: ${saleRecord}`);
    } else {
      console.log(
        `Запись о продаже квартиры ${propertyId} на дату ${saleDate} не найдена.`
      );
    }
  }

  getAllSales() {
    return Array.from(this.sales);
  }

  getSalesCount() {
    return this.sales.size;
  }
}

const salesReport = new SalesReport();

salesReport.addSale("Apartment1", "2024-09-01");
salesReport.addSale("Apartment2", "2024-09-05");
salesReport.addSale("Apartment1", "2024-09-01");
salesReport.addSale("Apartment3", "2024-09-10");

salesReport.removeSale("Apartment2", "2024-09-05");

console.log("Все уникальные записи о продаже:", salesReport.getAllSales());
console.log("Количество уникальных записей:", salesReport.getSalesCount());
