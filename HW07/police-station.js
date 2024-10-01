class PoliceStation {
  constructor() {
    this.cases = [];
  }
  addCase(caseNumber, suspectName, status) {
    if (
      typeof caseNumber !== "number" ||
      typeof suspectName !== "string" ||
      typeof status !== "string"
    ) {
      throw new Error("Некорректные данные для добавления дела.");
    }

    const newCase = {
      caseNumber: caseNumber,
      suspectName: suspectName,
      status: status,
    };
    this.cases.push(newCase);
  }

  findCaseByNumber(caseNumber) {
    const foundCase = this.cases.find((c) => c.caseNumber === caseNumber);
    return foundCase || null;
  }

  findCaseBySuspectName(suspectName) {
    const foundCase = this.cases.find((c) => c.suspectName === suspectName);
    return foundCase || null;
  }

  getAllCases() {
    return this.cases.map(
      (c) => `Дело №${c.caseNumber}: ${c.suspectName}, Статус: ${c.status}`
    );
  }
}

const policeStation = new PoliceStation();

policeStation.addCase(101, "Анвар Холиков", "расследуется");
policeStation.addCase(102, "Рухшона Давлатова", "открыто");
policeStation.addCase(103, "Сомон Усмонов", "закрыто");

const caseByNumber = policeStation.findCaseByNumber(102);
console.log("\nПоиск дела по номеру 102:");
console.log(caseByNumber);

const caseBySuspectName = policeStation.findCaseBySuspectName("Сомон Усмонов");
console.log('\nПоиск дела по имени подозреваемого "Сомон Усмонов":');
console.log(caseBySuspectName);
console.log("\nСписок всех дел:");
console.log(policeStation.getAllCases());
