const formulas = [
    {
      name: "SUMIF",
      category: "Math",
      description: "Sums values that meet a criterion.",
      sheets: "=SUMIF(range, criterion, [sum_range])",
      excel: "=SUMIF(range, criterion, [sum_range])",
      example: "Sum numbers in A1:A10 where values are >50: =SUMIF(A1:A10, \">50\")",
      keywords: {
        sum: 0.9,
        add: 0.8,
        total: 0.7,
        above: 0.6,
        greater: 0.6,
        criterion: 0.5,
        condition: 0.5,
        range: 0.4
      }
    },
    {
      name: "SUMIFS",
      category: "Math",
      description: "Sums values that meet multiple criteria.",
      sheets: "=SUMIFS(sum_range, criteria_range1, criterion1, [criteria_range2, criterion2, ...])",
      excel: "=SUMIFS(sum_range, criteria_range1, criterion1, [criteria_range2, criterion2, ...])",
      example: "Sum B1:B20 where A1:A20 > 50 and C1:C20 = \"Yes\": =SUMIFS(B1:B20, A1:A20, \">50\", C1:C20, \"Yes\")",
      keywords: {
        sum: 0.9,
        add: 0.8,
        total: 0.7,
        multiple: 0.6,
        criteria: 0.6,
        condition: 0.5,
        range: 0.4
      }
    },
    {
      name: "COUNTIF",
      category: "Statistical",
      description: "Counts cells that meet a criterion.",
      sheets: "=COUNTIF(range, criterion)",
      excel: "=COUNTIF(range, criterion)",
      example: "Count cells in B1:B20 with text: =COUNTIF(B1:B20, \"*\")",
      keywords: {
        count: 0.9,
        number: 0.7,
        text: 0.6,
        cells: 0.5,
        criterion: 0.5,
        condition: 0.5,
        range: 0.4
      }
    },
    {
      name: "MEDIAN",
      category: "Statistical",
      description: "Returns the median of a range of numbers.",
      sheets: "=MEDIAN(range)",
      excel: "=MEDIAN(range)",
      example: "Find median of D1:D15: =MEDIAN(D1:D15)",
      keywords: {
        median: 0.9,
        middle: 0.8,
        numbers: 0.7,
        range: 0.6,
        statistical: 0.5
      }
    },
    {
      name: "VLOOKUP",
      category: "Lookup",
      description: "Searches for a value in the first column of a range.",
      sheets: "=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])",
      excel: "=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])",
      example: "Find a value in A1:C10: =VLOOKUP(B1, A1:C10, 2, FALSE)",
      keywords: {
        lookup: 0.9,
        search: 0.8,
        find: 0.7,
        value: 0.6,
        table: 0.5,
        column: 0.5,
        range: 0.4
      }
    },
    {
      name: "XLOOKUP",
      category: "Lookup",
      description: "Searches a range and returns a value from another range (Excel only, Sheets alternative: INDEX/MATCH).",
      sheets: "Use INDEX/MATCH instead: =INDEX(return_range, MATCH(lookup_value, lookup_range, 0))",
      excel: "=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])",
      example: "Excel: Find value in A1:A20, return from B1:B20: =XLOOKUP(C1, A1:A20, B1:B20)",
      keywords: {
        lookup: 0.9,
        search: 0.8,
        find: 0.7,
        value: 0.6,
        advanced: 0.5,
        range: 0.4
      }
    },
    {
      name: "IF",
      category: "Logical",
      description: "Returns one value if a condition is true, another if false.",
      sheets: "=IF(logical_test, value_if_true, value_if_false)",
      excel: "=IF(logical_test, value_if_true, value_if_false)",
      example: "Check if C1 > 100: =IF(C1>100, \"High\", \"Low\")",
      keywords: {
        if: 0.9,
        condition: 0.8,
        test: 0.7,
        logical: 0.6,
        true: 0.5,
        false: 0.5
      }
    },
    {
      name: "AND",
      category: "Logical",
      description: "Returns TRUE if all conditions are true.",
      sheets: "=AND(logical1, [logical2, ...])",
      excel: "=AND(logical1, [logical2, ...])",
      example: "Check if A1 > 50 and B1 < 100: =AND(A1>50, B1<100)",
      keywords: {
        and: 0.9,
        multiple: 0.8,
        condition: 0.7,
        logical: 0.6,
        true: 0.5
      }
    },
    {
      name: "AVERAGE",
      category: "Statistical",
      description: "Calculates the average of a range of numbers.",
      sheets: "=AVERAGE(range)",
      excel: "=AVERAGE(range)",
      example: "Average numbers in D1:D15: =AVERAGE(D1:D15)",
      keywords: {
        average: 0.9,
        mean: 0.8,
        numbers: 0.7,
        range: 0.6,
        statistical: 0.5
      }
    },
    {
      name: "CONCATENATE",
      category: "Text",
      description: "Joins multiple text strings into one.",
      sheets: "=CONCATENATE(text1, [text2, ...])",
      excel: "=CONCATENATE(text1, [text2, ...])",
      example: "Combine A1 and B1: =CONCATENATE(A1, \" \", B1)",
      keywords: {
        concatenate: 0.9,
        join: 0.8,
        text: 0.7,
        combine: 0.6,
        string: 0.5
      }
    },
    {
      name: "TEXT",
      category: "Text",
      description: "Formats a number or date as text.",
      sheets: "=TEXT(value, format_text)",
      excel: "=TEXT(value, format_text)",
      example: "Format date in A1 as 'MMMM YYYY': =TEXT(A1, \"MMMM YYYY\")",
      keywords: {
        text: 0.9,
        format: 0.8,
        date: 0.7,
        number: 0.6,
        string: 0.5
      }
    },
    {
      name: "LEFT",
      category: "Text",
      description: "Extracts a specified number of characters from the start of a text string.",
      sheets: "=LEFT(text, [num_chars])",
      excel: "=LEFT(text, [num_chars])",
      example: "Extract first 5 characters from A1: =LEFT(A1, 5)",
      keywords: {
        left: 0.9,
        extract: 0.8,
        text: 0.7,
        characters: 0.6,
        string: 0.5
      }
    },
    {
      name: "RIGHT",
      category: "Text",
      description: "Extracts a specified number of characters from the end of a text string.",
      sheets: "=RIGHT(text, [num_chars])",
      excel: "=RIGHT(text, [num_chars])",
      example: "Extract last 4 characters from B1: =RIGHT(B1, 4)",
      keywords: {
        right: 0.9,
        extract: 0.8,
        text: 0.7,
        characters: 0.6,
        string: 0.5
      }
    },
    {
      name: "TODAY",
      category: "Date",
      description: "Returns the current date.",
      sheets: "=TODAY()",
      excel: "=TODAY()",
      example: "Get today’s date in E1: =TODAY()",
      keywords: {
        today: 0.9,
        date: 0.8,
        current: 0.7,
        day: 0.6
      }
    },
    {
      name: "DATEDIF",
      category: "Date",
      description: "Calculates the difference between two dates in years, months, or days.",
      sheets: "=DATEDIF(start_date, end_date, unit)",
      excel: "=DATEDIF(start_date, end_date, unit)",
      example: "Days between A1 and B1: =DATEDIF(A1, B1, \"D\")",
      keywords: {
        difference: 0.9,
        date: 0.8,
        days: 0.7,
        months: 0.6,
        years: 0.6,
        calculate: 0.5
      }
    },
    {
      name: "PMT",
      category: "Financial",
      description: "Calculates the payment for a loan based on constant payments and interest rate.",
      sheets: "=PMT(rate, nper, pv, [fv], [type])",
      excel: "=PMT(rate, nper, pv, [fv], [type])",
      example: "Monthly payment for a $10,000 loan at 5% over 3 years: =PMT(5%/12, 36, 10000)",
      keywords: {
        payment: 0.9,
        loan: 0.8,
        financial: 0.7,
        interest: 0.6,
        rate: 0.5
      }
    },
    {
      name: "NPV",
      category: "Financial",
      description: "Calculates the net present value of an investment.",
      sheets: "=NPV(rate, value1, [value2, ...])",
      excel: "=NPV(rate, value1, [value2, ...])",
      example: "NPV of cash flows in B1:B10 at 10% rate: =NPV(10%, B1:B10)",
      keywords: {
        npv: 0.9,
        present: 0.8,
        value: 0.7,
        investment: 0.6,
        financial: 0.5,
        rate: 0.4
      }
    },
    {
      name: "Conditional Formatting - Highlight Overdue",
      category: "Conditional Formatting",
      description: "Highlights cells where dates are overdue compared to today.",
      sheets: "Apply to range A1:A20: =A1<TODAY()",
      excel: "Apply to range A1:A20: =A1<TODAY()",
      example: "Highlight dates in A1:A20 before today: Set rule =A1<TODAY(), format with red fill.",
      keywords: {
        highlight: 0.9,
        overdue: 0.8,
        date: 0.7,
        today: 0.7,
        notification: 0.6,
        conditional: 0.5,
        formatting: 0.5,
        range: 0.4
      }
    },
    {
      name: "Conditional Formatting - Above Threshold",
      category: "Conditional Formatting",
      description: "Highlights cells where values exceed a threshold.",
      sheets: "Apply to range B1:B20: =B1>100",
      excel: "Apply to range B1:B20: =B1>100",
      example: "Highlight values in B1:B20 above 100: Set rule =B1>100, format with green fill.",
      keywords: {
        highlight: 0.9,
        above: 0.8,
        threshold: 0.7,
        greater: 0.6,
        notification: 0.6,
        conditional: 0.5,
        formatting: 0.5,
        range: 0.4
      }
    },
    {
      name: "IFERROR",
      category: "Logical",
      description: "Returns a value if no error, otherwise an alternative value.",
      sheets: "=IFERROR(value, [value_if_error])",
      excel: "=IFERROR(value, [value_if_error])",
      example: "Handle error in A1/B1: =IFERROR(A1/B1, \"Error\")",
      keywords: {
        error: 0.9,
        handle: 0.8,
        iferror: 0.7,
        logical: 0.6,
        value: 0.5
      }
    }
  ];
  
  const synonyms = {
    total: "sum",
    add: "sum",
    greater: "above",
    number: "count",
    search: "lookup",
    find: "lookup",
    combine: "concatenate",
    join: "concatenate",
    mean: "average",
    current: "today",
    notification: "highlight",
    format: "formatting",
    overdue: "highlight",
    middle: "median",
    difference: "datedif",
    calculate: "datedif",
    payment: "pmt",
    present: "npv",
    handle: "iferror"
  };