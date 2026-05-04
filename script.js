const lessons = [
    {
        title: "1-Bosqich: Matematika va Sanoq",
        id: "l1",
        formulas: [
            {
                en: "SUM", ru: "СУММ", uz: "Yig'indi",
                description: "Tanlangan diapazondagi barcha sonlarni qo'shadi.",
                commentary: "Katta jadvallar bilan ishlashda eng ko'p ishlatiladigan formula.",
                fx: "=SUM(A1:B1)",
                headers: ["A", "B", "C"],
                rows: [["10", "20", "30"], ["5", "15", "20"]],
                resultCell: [0, 2],
                resultComment: "A1 (10) va B1 (20) ning yig'indisi C1 ga (30) chiqadi.",
                examples: ["=SUM(A1:A50) - Ustundagi hamma sonlarni qo'shadi", "=SUM(A1, C5, E10) - Alohida kataklarni qo'shadi", "=SUM(A1:B5, 100) - Diapazonga 100 ni qo'shadi"]
            },
            {
                en: "AVERAGE", ru: "СРЗНАЧ", uz: "O'rtacha qiymat",
                description: "Sonlarning o'rtacha arifmetik qiymatini topadi.",
                commentary: "O'rtacha ball yoki foizlarni hisoblashda ishlatiladi.",
                fx: "=AVERAGE(A1:B1)",
                headers: ["A", "B", "C"],
                rows: [["80", "100", "90"], ["20", "40", "30"]],
                resultCell: [0, 2],
                resultComment: "(80 + 100) / 2 = 90 natijasini beradi.",
                examples: ["=AVERAGE(B1:B20) - Tanlangan ustun o'rtachasi", "=AVERAGE(A1, 5, 10) - Sonlar va katak o'rtachasi", "=AVERAGE(C1:E5) - Katta hudud o'rtachasi"]
            },
            {
                en: "MIN", ru: "МИН", uz: "Minimum",
                description: "Eng kichik sonni topadi.",
                commentary: "Eng arzon narxni yoki eng past ballni aniqlash uchun.",
                fx: "=MIN(A1:C1)",
                headers: ["A", "B", "C", "D"],
                rows: [["55", "12", "7", "7"]],
                resultCell: [0, 3],
                resultComment: "A1, B1 va C1 orasidan eng kichigi 7.",
                examples: ["=MIN(A1:A100) - Ro'yxatdagi eng kichik son", "=MIN(B1, C5) - Ikki katakdan kichigini topish", "=MIN(10, 20, 5) - Berilgan sonlardan 5 ni qaytaradi"]
            },
            {
                en: "MAX", ru: "МАКС", uz: "Maksimum",
                description: "Eng katta sonni topadi.",
                commentary: "Eng yuqori maosh yoki rekord natijani bilish uchun.",
                fx: "=MAX(A1:C1)",
                headers: ["A", "B", "C", "D"],
                rows: [["45", "99", "12", "99"]],
                resultCell: [0, 3],
                resultComment: "45, 99 va 12 orasidan eng kattasi 99.",
                examples: ["=MAX(B1:B50) - Ro'yxatdagi eng katta son", "=MAX(A1, C1) - Ikki katakdan kattasini topish", "=MAX(5, 50, 15) - 50 ni qaytaradi"]
            },
            {
                en: "COUNT", ru: "СЧЁТ", uz: "Sonli sanoq",
                description: "Faqat son yozilgan kataklarni sanaydi.",
                commentary: "Matnlarni hisobga olmaydi, faqat raqamlarni sanaydi.",
                fx: "=COUNT(A1:C1)",
                headers: ["A", "B", "C", "D"],
                rows: [["10", "Olma", "20", "2"]],
                resultCell: [0, 3],
                resultComment: "A1 va C1 (2 ta katak) son bor. B1 dagi matnni sanamaydi.",
                examples: ["=COUNT(A1:A50) - Ustundagi sonli kataklar soni", "=COUNT(B1:E10) - Katta hududdagi sonlar soni", "=COUNT(1, 2, \"olma\") - 2 natijasini beradi"]
            }
        ]
    },
    {
        title: "2-Bosqich: Mantiq va Matn",
        id: "l2",
        formulas: [
            {
                en: "IF", ru: "ЕСЛИ", uz: "Agar...",
                description: "Shartga qarab natija chiqaradi.",
                commentary: "Shart bajarilsa birinchi, bo'lmasa ikkinchi so'z chiqadi.",
                fx: "=IF(A1>=60, \"O'tdi\", \"Yiqildi\")",
                headers: ["A", "B"],
                rows: [["55", "Yiqildi"], ["75", "O'tdi"]],
                resultCell: [0, 1],
                resultComment: "Shart (55 >= 60) bajarilmagani uchun 'Yiqildi' chiqdi.",
                examples: ["=IF(A1>0, \"+\", \"-\")", "=IF(B1=\"Ha\", 1, 0)", "=IF(C1>100, \"OK\", \"\")"]
            },
            {
                en: "CONCATENATE", ru: "СЦЕПИТЬ", uz: "Birlashtirish",
                description: "Matnlarni bitta katakka yig'adi.",
                commentary: "Ism va familiyani bitta katakka yozishda ishlatiladi. Excel 2016 gacha faqat shu formula bor.",
                fx: "=CONCATENATE(A1, \" \", B1)",
                headers: ["A", "B", "C"],
                rows: [["Ali", "Valiyev", "Ali Valiyev"]],
                resultCell: [0, 2],
                resultComment: "A1 va B1 dagi so'zlar birlashtirildi.",
                examples: ["=CONCATENATE(\"Tel: \", C1)", "=A1 & \" \" & B1", "=CONCATENATE(A1, \", \", B1)"]
            },
            {
                en: "LEN", ru: "ДЛСТР", uz: "Uzunlik",
                description: "Belgilar sonini sanaydi.",
                commentary: "Parol yoki kod uzunligini tekshirish uchun.",
                fx: "=LEN(A1)",
                headers: ["A", "B"],
                rows: [["Excel", "5"]],
                resultCell: [0, 1],
                resultComment: "'Excel' so'zida 5 ta belgi bor.",
                examples: ["=LEN(\"Salom\")", "=LEN(12345)", "=LEN(B2)"]
            },
            {
                en: "UPPER", ru: "ПРОПИСН", uz: "Katta harf",
                description: "Hammasini KATTA harf qiladi.",
                commentary: "Standart formatlash uchun kerak.",
                fx: "=UPPER(A1)",
                headers: ["A", "B"],
                rows: [["uzb", "UZB"]],
                resultCell: [0, 1],
                resultComment: "Kichik harflar KATTA ga aylantirildi.",
                examples: ["=UPPER(\"test\")", "=UPPER(B5)", "=UPPER(\"hello\")"]
            },
            {
                en: "LOWER", ru: "СТРОЧН", uz: "Kichik harf",
                description: "Hammasini kichik harf qiladi.",
                commentary: "Katta yozilganlarni kichik qilish uchun.",
                fx: "=LOWER(A1)",
                headers: ["A", "B"],
                rows: [["EXCEL", "excel"]],
                resultCell: [0, 1],
                resultComment: "KATTA harflar kichik qilindi.",
                examples: ["=LOWER(\"ADMIN\")", "=LOWER(C3)", "=LOWER(\"OLMA\")"]
            }
        ]
    },
    {
        title: "3-Bosqich: Qidiruv va Shartli Sanoq",
        id: "l3",
        formulas: [
            {
                en: "VLOOKUP", ru: "ВПР", uz: "V-Qidiruv",
                description: "Jadvaldan qiymat qidiradi.",
                commentary: "Vertical Lookup - ustun bo'ylab qidiruv.",
                fx: "=VLOOKUP(\"Olma\", A1:B2, 2, 0)",
                headers: ["A (Nomi)", "B (Narxi)"],
                rows: [["Olma", "5000"], ["Anor", "8000"]],
                resultCell: [0, 1],
                resultComment: "Olma so'zini topib, uning narxi 5000 ni chiqardi.",
                examples: ["=VLOOKUP(ID, Range, Col, 0)", "=VLOOKUP(A1, D:F, 3, 0)", "=VLOOKUP(\"Sut\", B2:C10, 2, 0)"]
            },
            {
                en: "COUNTIF", ru: "СЧЁТЕСЛИ", uz: "Shartli sanoq",
                description: "Shartga qarab kataklarni sanaydi.",
                commentary: "Masalan: Nechta 'O'tdi' degan yozuv bor?",
                fx: "=COUNTIF(A1:A4, \"O'tdi\")",
                headers: ["A", "B (Natija)"],
                rows: [["O'tdi", "3"], ["Yiqildi", ""], ["O'tdi", ""], ["O'tdi", ""]],
                resultCell: [0, 1],
                resultComment: "Ushbu ustunda 3 ta 'O'tdi' yozuvi bor.",
                examples: ["=COUNTIF(A:A, \">100\")", "=COUNTIF(B:B, \"*Sut*\")", "=COUNTIF(C:C, 5)"]
            },
            {
                en: "SUMIF", ru: "СУММЕСЛИ", uz: "Shartli yig'indi",
                description: "Shartga qarab sonlarni qo'shadi.",
                commentary: "Faqat 'Non' uchun jami summani hisoblaydi.",
                fx: "=SUMIF(A1:A3, \"Non\", B1:B3)",
                headers: ["A (Nomi)", "B (Narx)", "C (Natija)"],
                rows: [["Non", "3000", "6000"], ["Sut", "5000", ""], ["Non", "3000", ""]],
                resultCell: [0, 2],
                resultComment: "Faqat 'Non'larning narxi qo'shildi: 6000.",
                examples: ["=SUMIF(A:A, \">5000\")", "=SUMIF(B:B, \"Ha\", C:C)"]
            },
            {
                en: "COUNTA", ru: "СЧЁТЗ", uz: "Barchasini sanoq",
                description: "Bo'sh bo'lmagan hamma katakni sanaydi.",
                commentary: "Matn, son, belgi bo'lsa ham sanayveradi.",
                fx: "=COUNTA(A1:B1)",
                headers: ["A", "B", "C (Natija)"],
                rows: [["10", "Salom", "2"]],
                resultCell: [0, 2],
                resultComment: "Ikkala katak ham to'la, natija 2.",
                examples: ["=COUNTA(A:Z)", "=COUNTA(B1:B50)", "=COUNTA(1, \"test\")"]
            },
            {
                en: "ROUND", ru: "ОКРУГЛ", uz: "Yaxlitlash",
                description: "Sonni yaxlitlaydi.",
                commentary: "Verguldan keyingi sonlarni qisqartirish.",
                fx: "=ROUND(A1, 2)",
                headers: ["A", "B"],
                rows: [["12.556", "12.56"]],
                resultCell: [0, 1],
                resultComment: "12.556 -> 12.56 ga aylandi.",
                examples: ["=ROUND(A1, 0)", "=ROUND(15.2, 0)", "=ROUND(125.12, -1)"]
            }
        ]
    },
    {
        title: "4-Bosqich: Sana va Qo'shimchalar",
        id: "l4",
        formulas: [
            {
                en: "TODAY", ru: "СЕГОДНЯ", uz: "Bugungi sana",
                description: "Hozirgi sanani ko'rsatadi.",
                commentary: "Har kun yangilanadi.",
                fx: "=TODAY()",
                headers: ["A"],
                rows: [["31.03.2026"]],
                resultCell: [0, 0],
                resultComment: "Bugun 31-mart, 2026-yil.",
                examples: ["=TODAY()", "=TODAY()+1 (Ertaga)", "=TODAY()-1 (Kecha)"]
            },
            {
                en: "NOW", ru: "ТДАТА", uz: "Hozirgi vaqt",
                description: "Sana va soatni ko'rsatadi.",
                commentary: "Ayni damdagi vaqt nazorati.",
                fx: "=NOW()",
                headers: ["A"],
                rows: [["31.03.2026 22:33"]],
                resultCell: [0, 0],
                resultComment: "Sana va vaqt (soat:minut) ko'rinadi.",
                examples: ["=NOW()"]
            },
            {
                en: "TRIM", ru: "СЖПРОБЕЛЫ", uz: "Tozalash",
                description: "Ortiqcha bo'sh joylarni o'chiradi.",
                commentary: "Xatolar kamayishiga yordam beradi.",
                fx: "=TRIM(A1)",
                headers: ["A", "B"],
                rows: [["  Salom  ", "Salom"]],
                resultCell: [0, 1],
                resultComment: "Atrofdagi bo'shliqlar olib tashlandi.",
                examples: ["=TRIM(B1)", "=TRIM(\"  matn  \")"]
            },
            {
                en: "PROPER", ru: "ПРОПНАЧ", uz: "Bosh harf",
                description: "So'z boshini katta qiladi.",
                commentary: "Ismlarni to'g'irlash uchun.",
                fx: "=PROPER(A1)",
                headers: ["A", "B"],
                rows: [["toshkent", "Toshkent"]],
                resultCell: [0, 1],
                resultComment: "'toshkent' -> 'Toshkent' bo'ldi.",
                examples: ["=PROPER(\"ali valiyev\")", "=PROPER(\"O'ZBEKISTON\")"]
            },
            {
                en: "LEFT", ru: "ЛЕВСИМВ", uz: "Chapdan kesish",
                description: "Matnni chapdan bo'laklaydi.",
                commentary: "Bosh harflarni ajratib olish.",
                fx: "=LEFT(A1, 2)",
                headers: ["A", "B"],
                rows: [["Uzbekistan", "Uz"]],
                resultCell: [0, 1],
                resultComment: "Chapdan 2 ta harf olindi.",
                examples: ["=LEFT(A1, 3)", "=LEFT(\"99890\", 3)"]
            }
        ]
    },
    {
        title: "5-Bosqich: Murakkab Qidiruv",
        id: "l5",
        formulas: [
            {
                en: "INDEX", ru: "ИНДЕКС", uz: "Indeks",
                description: "Jadvaldagi qator va ustun kesishgan joydagi qiymatni topadi.",
                commentary: "Katta massivlardan kerakli ma'lumotni olish uchun eng zo'r vosita.",
                fx: "=INDEX(A1:B2, 2, 2)",
                headers: ["A", "B"],
                rows: [["Olma", "500"], ["Anor", "800"]],
                resultCell: [1, 1],
                resultComment: "Jadvalning 2-qator va 2-ustunidagi qiymat '800' olindi.",
                examples: ["=INDEX(A:A, 5)", "=INDEX(A1:D10, 3, 4)", "=INDEX(B2:B10, MATCH(100, B:B, 0))"]
            },
            {
                en: "MATCH", ru: "ПОИСКПОЗ", uz: "Pozitsiya qidiruv",
                description: "Kerakli qiymatning ro'yxatdagi nechanchi ekanligini topadi.",
                commentary: "Odatda INDEX bilan birga ishlatiladi (INDEX+MATCH).",
                fx: "=MATCH(\"Anor\", A1:A3, 0)",
                headers: ["A", "B (Natija)"],
                rows: [["Nok", ""], ["Anor", "2"], ["Behi", ""]],
                resultCell: [1, 1],
                resultComment: "'Anor' ro'yxatda 2-o'rinda turibdi, natija: 2.",
                examples: ["=MATCH(100, B:B, 0)", "=MATCH(\"Ali\", A2:A20, 0)"]
            },
            {
                en: "IFERROR", ru: "ЕСЛИОШИБКА", uz: "Xatolik bo'lsa...",
                description: "Formula xato bersa, o'rniga boshqa narsa chiqaradi.",
                commentary: "#N/A yoki #DIV/0! kabi xunuk xatoliklarni yashirish uchun.",
                fx: "=IFERROR(10/0, \"Xato!\")",
                headers: ["A", "B"],
                rows: [["10", "Xato!"]],
                resultCell: [0, 1],
                resultComment: "Nolga bo'lib bo'lmaydi, shuning uchun 'Xato!' yozuvi chiqadi.",
                examples: ["=IFERROR(VLOOKUP(100,A:B,2,0), \"Topilmadi\")", "=IFERROR(A1/B1, 0)"]
            },
            {
                en: "HLOOKUP", ru: "ГПР", uz: "H-Qidiruv",
                description: "Gorizontal qator bo'ylab ma'lumot qidiradi.",
                commentary: "VLOOKUP ning uka varianti, tepadan pastga emas, chapdan o'ngga qidiradi.",
                fx: "=HLOOKUP(\"Oy\", A1:B2, 2, 0)",
                headers: ["A", "B"],
                rows: [["Oy", "Yil"], ["Yanvar", "2026"]],
                resultCell: [1, 0],
                resultComment: "'Oy' so'zini topib, ostidagi 'Yanvar'ni qaytardi.",
                examples: ["=HLOOKUP(A1, B1:Z5, 2, 0)"]
            },
            {
                en: "OFFSET", ru: "СМЕЩ", uz: "Siljish",
                description: "Boshlang'ich nuqtadan ko'rsatilgan qator va ustunlar bo'ylab siljib, ma'lumotni oladi.",
                commentary: "Asosan dinamik jadvallar yaratishda juda keng ishlatiladi.",
                fx: "=OFFSET(A1, 1, 1)",
                headers: ["A", "B"],
                rows: [["Ism", "Yosh"], ["Ali", "25"]],
                resultCell: [1, 1],
                resultComment: "A1 (Ism) dan 1 qator pastga, 1 ustun o'ngga siljib '25' ni oldi.",
                examples: ["=OFFSET(B1, 2, 0)", "=SUM(OFFSET(A1, 0, 0, 5, 1))"]
            }
        ]
    },
    {
        title: "6-Bosqich: Shartli Yig'indilar va Statistika",
        id: "l6",
        formulas: [
            {
                en: "SUMIFS", ru: "СУММЕСЛИМН", uz: "Ko'p shartli yig'indi",
                description: "Bir nechta shart bajarilganda sonlarni qo'shadi.",
                commentary: "SUMIF dan farqli o'laroq bir nechta ustunga qarab filtrlash mumkin.",
                fx: "=SUMIFS(C1:C2, A1:A2, \"Olma\", B1:B2, \">10\")",
                headers: ["A (Nomi)", "B (Miqdor)", "C (Narx)", "D (Natija)"],
                rows: [["Olma", "15", "500", "500"], ["Olma", "5", "500", ""]],
                resultCell: [0, 3],
                resultComment: "Olma va miqdori 10 dan kattasining narxi qo'shildi (500).",
                examples: ["=SUMIFS(C:C, A:A, \"Ustoz\", B:B, \">1000\")"]
            },
            {
                en: "COUNTIFS", ru: "СЧЁТЕСЛИМН", uz: "Ko'p shartli sanoq",
                description: "Bir nechta shartga mos tushadigan kataklarni sanaydi.",
                commentary: "Masalan: Nechta erkak xodim 30 yoshdan katta?",
                fx: "=COUNTIFS(A1:A2, \"Erkak\", B1:B2, \">30\")",
                headers: ["A (Jins)", "B (Yosh)", "C (Natija)"],
                rows: [["Erkak", "35", "1"], ["Erkak", "25", ""]],
                resultCell: [0, 2],
                resultComment: "Faqat 1 kishi shartga mos tushdi, natija: 1.",
                examples: ["=COUNTIFS(A:A, \"Ha\", B:B, \"<5\")"]
            },
            {
                en: "AVERAGEIF", ru: "СРЗНАЧЕСЛИ", uz: "Shartli o'rtacha",
                description: "Shartga mos qatorlarning o'rtacha arifmetigini topadi.",
                commentary: "Faqat noldan katta sonlar o'rtachasini topishda qulay.",
                fx: "=AVERAGEIF(A1:A3, \">0\", B1:B3)",
                headers: ["A", "B", "C (Natija)"],
                rows: [["1", "10", "20"], ["0", "0", ""], ["1", "30", ""]],
                resultCell: [0, 2],
                resultComment: "(10 + 30) / 2 = 20 chiqdi. Nol hisoblanmadi.",
                examples: ["=AVERAGEIF(A:A, \"Qizil\", B:B)"]
            },
            {
                en: "SUBTOTAL", ru: "ПРОМЕЖУТОЧНЫЕ.ИТОГИ", uz: "Oraliq yig'indi",
                description: "Filtrlangan qatorlargagina amal (SUM, AVERAGE...) qo'llaydi.",
                commentary: "Jadvalni filtrlaganda yashiringan qatorlarni sanamaydi.",
                fx: "=SUBTOTAL(9, A1:A3)",
                headers: ["A (Filtrlangan)", "B (Natija)"],
                rows: [["10", "60"], ["20", ""], ["30", ""]],
                resultCell: [0, 1],
                resultComment: "Kataklarning ko'rinib turganlari yig'indisi (9 kod - SUM).",
                examples: ["=SUBTOTAL(1, B:B) // O'rtacha", "=SUBTOTAL(3, C:C) // Sanoq"]
            },
            {
                en: "PRODUCT", ru: "ПРОИЗВЕД", uz: "Ko'paytma",
                description: "Berilgan barcha sonlarni bir-biriga ko'paytiradi.",
                commentary: "* belgisini ko'p yozmaslik o'rniga shu formulani ishlatish qulay.",
                fx: "=PRODUCT(A1:B1, 2)",
                headers: ["A", "B", "C (Natija)"],
                rows: [["5", "3", "30"]],
                resultCell: [0, 2],
                resultComment: "5 * 3 * 2 = 30 ni hisoblab berdi.",
                examples: ["=PRODUCT(A1:A10)", "=PRODUCT(C1, C2, 5)"]
            }
        ]
    },
    {
        title: "7-Bosqich: Matn Bilan Ishlash (Qo'shimcha)",
        id: "l7",
        formulas: [
            {
                en: "SUBSTITUTE", ru: "ПОДСТАВИТЬ", uz: "Matnni almashtirish",
                description: "Matndagi biror so'zni yoki belgini boshqasiga o'zgartiradi.",
                commentary: "Ctrl+H ga o'xshaydi, lekin faqat ko'rsatilgan katak ichida bajaradi.",
                fx: "=SUBSTITUTE(A1, \"23\", \"26\")",
                headers: ["A", "B"],
                rows: [["Plan-2023", "Plan-2026"]],
                resultCell: [0, 1],
                resultComment: "Eski yil yozuvi yangisiga avtomat almashtirildi.",
                examples: ["=SUBSTITUTE(A1, \" \", \"_\") // Bo'shliqlarni chiziqchaga"]
            },
            {
                en: "TEXT", ru: "ТЕКСТ", uz: "Matnga aylantirish",
                description: "Son va sanalarni chiroyli matn formatiga o'tkazadi.",
                commentary: "Sanadan kun yoki oyni alohida so'z bilan olish uchun zo'r.",
                fx: "=TEXT(A1, \"DD-MMM-YYYY\")",
                headers: ["A", "B"],
                rows: [["01.01.2026", "01-Yan-2026"]],
                resultCell: [0, 1],
                resultComment: "Sana formati tushunarli matnga aylantirildi.",
                examples: ["=TEXT(TODAY(), \"DDDD\") // Bugungi kun nomi", "=TEXT(A1, \"$#,##0.00\")"]
            },
            {
                en: "FIND", ru: "НАЙТИ", uz: "Izlab topish",
                description: "Belgini matn ichida nechanchi o'rinda turganini aniqlaydi.",
                commentary: "Katta-kichik harfga ta'sirchan. Katta I va kichik i ni farqlay oladi.",
                fx: "=FIND(\"@\", A1)",
                headers: ["A", "B"],
                rows: [["ali@mail.com", "4"]],
                resultCell: [0, 1],
                resultComment: "@ belgisi matnda 4-o'rinda joylashgan.",
                examples: ["=FIND(\" \", A1)", "Odatda MID yoki LEFT bilan ishlatiladi."]
            },
            {
                en: "RIGHT", ru: "ПРАВСИМВ", uz: "O'ngdan kesish",
                description: "LEFT ning teskarisi, o'ng tomondan belgilarni bo'laklaydi.",
                commentary: "Telefon nomer oxiri yoki rasm formatini (.jpg) olishda kerak.",
                fx: "=RIGHT(A1, 3)",
                headers: ["A", "B"],
                rows: [["rasm.jpg", "jpg"]],
                resultCell: [0, 1],
                resultComment: "O'ngdan oxirgi 3 ta harf (fayl formati) qirqib olindi.",
                examples: ["=RIGHT(A1, 4)", "=RIGHT(\"12345\", 2) // Natija: 45"]
            },
            {
                en: "MID", ru: "ПСТР", uz: "O'rtadan kesish",
                description: "Matnning o'rtasidan keraklicha belgini ajratib oladi.",
                commentary: "Pasport seriyasini tashlab, faqat raqamini ajratishda qulay.",
                fx: "=MID(A1, 3, 7)",
                headers: ["A", "B"],
                rows: [["AA1234567", "1234567"]],
                resultCell: [0, 1],
                resultComment: "3-belgidan boshlab jami 7 ta belgi olindi.",
                examples: ["=MID(A1, START, UZUNLIK)", "=MID(\"XalqBank\", 5, 4) // Bank"]
            }
        ]
    },
    {
        title: "8-Bosqich: Mantiqiy Qo'shimchalar",
        id: "l8",
        formulas: [
            {
                en: "AND", ru: "И", uz: "Va (Hammasi to'g'ri)",
                description: "Berilgan barcha shartlar bajarilsagina TRUE qytaradi.",
                commentary: "Shartlardan atigi 1 ta xato bo'lsa ham natija FALSE bo'lib ketadi.",
                fx: "=AND(A1>10, B1=\"Ha\")",
                headers: ["A", "B", "C (Natija)"],
                rows: [["15", "Ha", "TRUE"], ["5", "Ha", "FALSE"]],
                resultCell: [0, 2],
                resultComment: "15 (10dan katta) hamda Ha (Ha), ikkisi ham to'g'ri (TRUE).",
                examples: ["=IF(AND(A1>0, A1<10), \"Oraliqda\", \"Tashqarida\")"]
            },
            {
                en: "OR", ru: "ИЛИ", uz: "Yoki (Bittasi to'g'ri)",
                description: "Shartlardan xech bo'lmasa 1 tasi to'g'ri bo'lsa, TRUE beradi.",
                commentary: "IF bilan birgalikda 'U yoki Bu' hollarni tekshirishda ishlatiladi.",
                fx: "=OR(A1=\"A\", A1=\"B\")",
                headers: ["A", "B"],
                rows: [["A", "TRUE"], ["C", "FALSE"]],
                resultCell: [0, 1],
                resultComment: "A katagi A ga teng bo'lgani uchun natija TRUE.",
                examples: ["=IF(OR(C1=\"Shanba\", C1=\"Yakshanba\"), \"Dam\", \"Ish\")"]
            },
            {
                en: "EXACT", ru: "СОВПАД", uz: "Aynan o'xshashlik",
                description: "Ikki matnning harflari kattaligigacha mutlaqo bir xilligini tekshiradi.",
                commentary: "Katta 'A' va kichik 'a' ni har xil deb biladi. Parollarni solishtirishda qulay.",
                fx: "=EXACT(A1, B1)",
                headers: ["A", "B", "C (Natija)"],
                rows: [["Excel", "excel", "FALSE"]],
                resultCell: [0, 2],
                resultComment: "Biri katta, biri kichik yozilgani uchun mutlaqo o'xshash emas (FALSE).",
                examples: ["=IF(EXACT(A1, B1), \"To'g'ri\", \"Xato\")"]
            },
            {
                en: "ISBLANK", ru: "ЕПУСТО", uz: "Bo'shligini tekshirish",
                description: "Katakning rostdan ham bo'sh yoki yo'qligini aniqlaydi.",
                commentary: "Jadvallarda to'ldirilmagan joylarni ajratishda asqotadi.",
                fx: "=ISBLANK(A1)",
                headers: ["A", "B"],
                rows: [["", "TRUE"]],
                resultCell: [0, 1],
                resultComment: "Katak bo'm-bo'sh turgani uchun TRUE.",
                examples: ["=IF(ISBLANK(A1), \"Toldiring!\", \"OK\")"]
            },
            {
                en: "NOT", ru: "НЕ", uz: "Inkor qilish",
                description: "Natijani yuz o'girib, teskarisiga aylantiradi.",
                commentary: "TRUE ni FALSE ga, FALSE ni TRUE ga ogiradi.",
                fx: "=NOT(A1=\"Yomon\")",
                headers: ["A", "B"],
                rows: [["Yaxshi", "TRUE"]],
                resultCell: [0, 1],
                resultComment: "Katak \"Yomon\" ga teng emaski (teskarisi), shuning uchun TRUE.",
                examples: ["=IF(NOT(ISBLANK(A1)), \"Joy to'la\", \"Bo'sh\")"]
            }
        ]
    },
    {
        title: "9-Bosqich: Vaqt va Sanalar (Qo'shimcha)",
        id: "l9",
        formulas: [
            {
                en: "EOMONTH", ru: "КОНМЕСЯЦА", uz: "Oy oxiri",
                description: "Sana qaysi oyda bo'lsa, shu oyning eng so'nggi kunini beradi (yoki n oy oldinga/orqaga).",
                commentary: "Kredit to'lovlari grafigini tuzishda zo'r formula.",
                fx: "=EOMONTH(A1, 1)",
                headers: ["A", "B"],
                rows: [["15.01", "28.02"]],
                resultCell: [0, 1],
                resultComment: "Yanvardan 1 oy keyingi oyning (fevral) oxirgi kuni.",
                examples: ["=EOMONTH(TODAY(), 0) // Shu oy oxiri", "=EOMONTH(A1, -1) // O'tgan oy oxiri"]
            },
            {
                en: "NETWORKDAYS", ru: "ЧИСТРАВДН", uz: "Ish kunlari",
                description: "Ikki sana orasidagi faqat ish kunlari (Du-Ju) sonini topadi.",
                commentary: "Xodimlarning haqiqiy ishlagan kunini olish uchun.",
                fx: "=NETWORKDAYS(A1, B1)",
                headers: ["A", "B", "C"],
                rows: [["01.01", "10.01", "7"]],
                resultCell: [0, 2],
                resultComment: "10 kundan 2 ta dam olish kuni (Shanba,Yakshanba) olindi.",
                examples: ["=NETWORKDAYS(Bosh, Oxir, bayramlar)"]
            },
            {
                en: "DATEDIF", ru: "РАЗНДАТ", uz: "Sanalar farqi",
                description: "Yashiringan formula: Ikki sana orasidagi yillar, oylar, kunlarni topadi.",
                commentary: "Yoshni yoki stajni hisoblashda mutlaqo ishonchli usul.",
                fx: "=DATEDIF(A1, TODAY(), \"Y\")",
                headers: ["A", "B"],
                rows: [["01.05.2000", "25"]],
                resultCell: [0, 1],
                resultComment: "Tug'ilgan yildan bugungi kungacha 25 Yil (Y) o'tdi.",
                examples: ["=DATEDIF(A1, B1, \"M\") // Oylar soni", "=DATEDIF(A1, B1, \"D\") // Kunlar"]
            },
            {
                en: "YEAR", ru: "ГОД", uz: "Yilni ajratish",
                description: "Sanadan faqat yil qismini ajratb, son formatida beradi.",
                commentary: "Xuddi shuningdek MONTH, DAY kabi hamrohlari ham bor.",
                fx: "=YEAR(A1)",
                headers: ["A", "B"],
                rows: [["15.11.2026", "2026"]],
                resultCell: [0, 1],
                resultComment: "To'liq sanadan faqat raqamli 2026 yil olingan.",
                examples: ["=MONTH(A1) // 11 natija beradi", "=DAY(TODAY()) // Bugungi kun"]
            },
            {
                en: "WORKDAY", ru: "РАБДЕНЬ", uz: "Kutilyotgan ish kuni",
                description: "Sanaga n ta ish kuni qo'shsa qayis chisloga to'g'ri keladi?",
                commentary: "Topshiriq 15 ish kunida bitadi desa, tayyor bo'lish sanasini topish.",
                fx: "=WORKDAY(A1, 5)",
                headers: ["A", "B"],
                rows: [["01.04(Chor)", "08.04(Chor)"]],
                resultCell: [0, 1],
                resultComment: "Dam olishlar tashlanib yana 5 ta ish kuni o'tdi.",
                examples: ["=WORKDAY(TODAY(), 10)"]
            }
        ]
    },
    {
        title: "10-Bosqich: Massivlar va Foydali",
        id: "l10",
        formulas: [
            {
                en: "LARGE", ru: "НАИБОЛЬШИЙ", uz: "N-chi eng katta",
                description: "Ro'yxatdagi qiymatlardan nechinchi eng katta ekanligini topadi.",
                commentary: "Ballar ro'yxatidan 2- yoki 3-o'rinni olgan ballni topish uchun MAX yordam bermaydi, shu formula kerak.",
                fx: "=LARGE(A1:A3, 2)",
                headers: ["A"],
                rows: [["100"], ["80"], ["90"]],
                resultCell: [2, 0],
                resultComment: "Ushbu ro'yxatdagi eng katta 2-raqam bu 90 dir.",
                examples: ["=LARGE(B:B, 3)", "=LARGE(A1:C10, 5)"]
            },
            {
                en: "SMALL", ru: "НАИМЕНЬШИЙ", uz: "N-chi eng kichik",
                description: "Ro'yxatdagi qiymatlardan nechinchi eng kichik ekanligini aniqlaydi.",
                commentary: "MIN formulasi 1-kichikni topsa, bu istalgan o'rindagi kichikni topadi.",
                fx: "=SMALL(A1:A3, 2)",
                headers: ["A"],
                rows: [["15"], ["45"], ["20"]],
                resultCell: [2, 0],
                resultComment: "Eng kichigi 15, keyingisi esa 20.",
                examples: ["=SMALL(A:A, 2)", "=SMALL(B2:B20, 10)"]
            },
            {
                en: "RANK.EQ", ru: "РАНГ.РВ", uz: "Reyting (O'rin)",
                description: "Berilgan sonning umumiy ro'yxatda nechanchi o'rinda turishini topib beradi.",
                commentary: "Talabalarga ularning o'rinlarini ko'rsatib qo'yishda qulay.",
                fx: "=RANK.EQ(80, A1:A3)",
                headers: ["A (Ballar)"],
                rows: [["90"], ["80"], ["60"]],
                resultCell: [1, 0],
                resultComment: "80 olgan inson jami kattaligi bo'yicha 2-o'rinda turibdi.",
                examples: ["=RANK.EQ(A2, A:A)", "=RANK.EQ(B2, B:B, 1) // Kichikdan kattaga"]
            },
            {
                en: "REPT", ru: "ПОВТОР", uz: "Takrorlash",
                description: "Ko'rsatilgan matnni yozilgan sondagi marotaba takrorlab yozadi.",
                commentary: "Baholarga qarab 5 yulduzcha (⭐⭐⭐⭐⭐) reytinglari yasash mumkin.",
                fx: "=REPT(\"⭐\", A1)",
                headers: ["A", "B"],
                rows: [["3", "⭐⭐⭐"]],
                resultCell: [0, 1],
                resultComment: "Katakdagi 3 raqamiga mos ravishda 3 ta yulduzchani chizdi.",
                examples: ["=REPT(\"-\", 10)", "=REPT(\"|\", A1/10)"]
            },
            {
                en: "RANDBETWEEN", ru: "СЛУЧМЕЖДУ", uz: "Tasodifiy son",
                description: "Kiritilgan 2 ta oraliq manzilidan tasodifiy sondan tanlab beradi.",
                commentary: "Loto, qura tashlash kabilarni kompyuter qilish.",
                fx: "=RANDBETWEEN(1, 100)",
                headers: ["A"],
                rows: [["42"]],
                resultCell: [0, 0],
                resultComment: "1 va 100 ni orasida mutlaqo ixtiyoriy 42 tushdi.",
                examples: ["=RANDBETWEEN(1, 4)", "=RANDBETWEEN(1000, 9999)"]
            }
        ]
    }
];

function generateExcelDemo(f) {
    if (!f.headers) return '';
    return `
        <div class="excel-demo">
            <div class="excel-top-bar">
                <span class="fx-label">fx</span>
                <div class="fx-input">${f.fx}</div>
            </div>
            <table class="excel-table">
                <thead>
                    <tr>
                        <th style="width:35px"></th>
                        ${f.headers.map(h => `<th>${h}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${f.rows.map((row, rIdx) => `
                        <tr>
                            <td>${rIdx + 1}</td>
                            ${row.map((cell, cIdx) => `
                                <td class="${(f.resultCell && f.resultCell[0] === rIdx && f.resultCell[1] === cIdx) ? 'result-cell' : ''}">${cell}</td>
                            `).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
        <p style="font-size: 0.85rem; color: #444; margin: 10px 0 20px 0; border-left: 2px solid #217346; padding-left: 10px; line-height: 1.4;">
            <strong>Natija:</strong> ${f.resultComment || "Katakda ko'rsatilgan."}
        </p>
    `;
}

function initTabs() {
    const tabContainer = document.getElementById('tabContainer');
    const contentArea = document.getElementById('contentArea');
    tabContainer.innerHTML = '';
    contentArea.innerHTML = '';

    lessons.forEach((lesson, index) => {
        const btn = document.createElement('button');
        btn.className = `tab-button ${index === 0 ? 'active' : ''}`;
        btn.textContent = `${index + 1}-Bosqich`;
        btn.onclick = () => switchTab(index);
        tabContainer.appendChild(btn);

        const lessonDiv = document.createElement('div');
        lessonDiv.id = `lesson-${index}`;
        lessonDiv.className = `lesson-container ${index === 0 ? 'active' : ''}`;
        
        const grid = document.createElement('div');
        grid.className = 'formula-grid';

        lesson.formulas.forEach((f) => {
            const card = document.createElement('div');
            card.className = 'formula-card';
            card.innerHTML = `
                <div class="formula-header">
                    <span class="formula-name">${f.en}</span>
                    <span class="lang-badge">RU: ${f.ru}</span>
                </div>
                <div class="formula-description"><strong>${f.uz}</strong>: ${f.description}</div>
                <div class="commentary"><strong>💡 Izoh:</strong> ${f.commentary}</div>
                
                <div class="examples-title">Excel Jadval Namuna:</div>
                ${generateExcelDemo(f)}

                <div class="examples-title">3 ta qo'shimcha misol:</div>
                <ul class="example-list">
                    ${f.examples.map(ex => `<li class="example-item">${ex}</li>`).join('')}
                </ul>
            `;
            grid.appendChild(card);
        });

        lessonDiv.appendChild(grid);
        contentArea.appendChild(lessonDiv);
    });
}

function switchTab(index) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelectorAll('.tab-button').forEach((b, i) => b.classList.toggle('active', i === index));
    document.querySelectorAll('.lesson-container').forEach((c, i) => c.classList.toggle('active', i === index));
}

function copyCommand() {
    const commandText = document.getElementById('activationCommand').innerText;
    navigator.clipboard.writeText(commandText).then(() => {
        const btn = document.getElementById('copyBtn');
        const originalText = btn.innerText;
        btn.innerText = "Nusxa olindi! ✅";
        btn.style.background = "#2da160";
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = "";
        }, 2000);
    }).catch(err => {
        console.error("Xatolik: ", err);
    });
}

document.addEventListener('DOMContentLoaded', initTabs);
