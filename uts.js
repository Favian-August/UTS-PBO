// PARENT CLASS
class Cuti {
    constructor(name, quota) {
        this.name = name;
        this.quota = quota;
    }

    use(days) {
        if (days > this.quota) {
            return `${this.name}: Kuota tidak cukup!`;
        }
        this.quota -= days;
        return `${this.name}: Disetujui. Sisa kuota: ${this.quota}`;
    }
}

// CHILD 1
class CutiTahunan extends Cuti {
    constructor() {
        super("Cuti Tahunan", 12);
    }

    use(days) {
        return super.use(days); // memakai method parent
    }
}

// CHILD 2
class CutiSakit extends Cuti {
    constructor() {
        super("Cuti Sakit", 2);
    }

    use(days) {
        return super.use(days);
    }
}

// CHILD 3
class CutiMelahirkan extends Cuti {
    constructor() {
        super("Cuti Melahirkan", 90);
    }

    // Polymorphism → beda perilaku
    use(days) {
        if (days < 1) {
            return `Cuti Melahirkan minimal 1 hari!`;
        }
        return super.use(days);
    }
}

// --- DEMO / PENGAJUAN CUTI ---
class App {
    run() {
        const tahunan = new CutiTahunan();
        const sakit = new CutiSakit();
        const melahirkan = new CutiMelahirkan();

        console.log(tahunan.use(5));
        console.log(sakit.use(3));        // gagal
        console.log(melahirkan.use(95));  // ada aturan khusus
    }
}