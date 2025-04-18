const formulas = [
    {
      name: "SUM",
      category: "Math",
      description: "Adds a range of numbers.",
      sheets: "=SUM(range)",
      excel: "=SUM(range)",
      example: "Sum numbers in A1:A10: =SUM(A1:A10)",
      keywords: {
        sum: 0.9,
        add: 0.8,
        total: 0.7,
        numbers: 0.6,
        range: 0.5
      }
    },
    {
      name: "SUMIF",
      category: "Math",
      description: "Sums values that meet a criterion.",
      sheets: "=SUMIF(range, criterion, [sum_range])",
      excel: "=SUMIF(range, criterion, [sum_range])",
      example: "Sum A1:A10 where values >50: =SUMIF(A1:A10, \">50\")",
      keywords: {
        sum: 0.9,
        add: 0.8,
        total: 0.7,
        criterion: 0.6,
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
      example: "Sum B1:B20 where A1:A20 >50 and C1:C20 = \"Yes\": =SUMIFS(B1:B20, A1:A20, \">50\", C1:C20, \"Yes\")",
      keywords: {
        sum: 0.9,
        add: 0.8,
        multiple: 0.7,
        criteria: 0.6,
        condition: 0.5,
        range: 0.4
      }
    },
    {
      name: "PRODUCT",
      category: "Math",
      description: "Multiplies a range of numbers.",
      sheets: "=PRODUCT(range)",
      excel: "=PRODUCT(range)",
      example: "Multiply numbers in D1:D5: =PRODUCT(D1:D5)",
      keywords: {
        multiply: 0.9,
        product: 0.8,
        numbers: 0.7,
        range: 0.6
      }
    },
    {
      name: "RAND",
      category: "Math",
      description: "Generates a random number between 0 and 1.",
      sheets: "=RAND()",
      excel: "=RAND()",
      example: "Random number in A1: =RAND()",
      keywords: {
        random: 0.9,
        number: 0.8,
        generate: 0.7,
        math: 0.6
      }
    },
    {
      name: "ROUND",
      category: "Math",
      description: "Rounds a number to a specified number of digits.",
      sheets: "=ROUND(number, num_digits)",
      excel: "=ROUND(number, num_digits)",
      example: "Round A1 to 2 decimals: =ROUND(A1, 2)",
      keywords: {
        round: 0.9,
        number: 0.8,
        decimal: 0.7,
        digits: 0.6,
        math: 0.5
      }
    },
    {
      name: "SUBTOTAL",
      category: "Math",
      description: "Calculates a subtotal for a range with various functions.",
      sheets: "=SUBTOTAL(function_num, range)",
      excel: "=SUBTOTAL(function_num, range)",
      example: "Sum A1:A20 ignoring hidden rows: =SUBTOTAL(9, A1:A20)",
      keywords: {
        subtotal: 0.9,
        sum: 0.8,
        range: 0.7,
        function: 0.6,
        math: 0.5
      }
    },
    {
      name: "RANDBETWEEN",
      category: "Math",
      description: "Generates a random integer between two values.",
      sheets: "=RANDBETWEEN(low, high)",
      excel: "=RANDBETWEEN(low, high)",
      example: "Random integer between 1 and 100 in A1: =RANDBETWEEN(1, 100)",
      keywords: {
        random: 0.9,
        integer: 0.8,
        number: 0.7,
        between: 0.6,
        math: 0.5
      }
    },
    {
      name: "CEILING",
      category: "Math",
      description: "Rounds a number up to the nearest multiple of significance.",
      sheets: "=CEILING(number, significance)",
      excel: "=CEILING(number, significance)",
      example: "Round A1 up to nearest 10: =CEILING(A1, 10)",
      keywords: {
        ceiling: 0.9,
        round: 0.8,
        number: 0.7,
        multiple: 0.6,
        math: 0.5
      }
    },
    {
      name: "AVERAGE",
      category: "Statistical",
      description: "Calculates the average of a range of numbers.",
      sheets: "=AVERAGE(range)",
      excel: "=AVERAGE(range)",
      example: "Average numbers in E1:E15: =AVERAGE(E1:E15)",
      keywords: {
        average: 0.9,
        mean: 0.8,
        numbers: 0.7,
        range: 0.6,
        statistical: 0.5
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
        criterion: 0.5,
        range: 0.4
      }
    },
    {
      name: "MEDIAN",
      category: "Statistical",
      description: "Returns the median of a range of numbers.",
      sheets: "=MEDIAN(range)",
      excel: "=MEDIAN(range)",
      example: "Median of D1:D15: =MEDIAN(D1:D15)",
      keywords: {
        median: 0.9,
        middle: 0.8,
        numbers: 0.7,
        range: 0.6,
        statistical: 0.5
      }
    },
    {
      name: "MIN",
      category: "Statistical",
      description: "Returns the smallest number in a range.",
      sheets: "=MIN(range)",
      excel: "=MIN(range)",
      example: "Minimum value in F1:F10: =MIN(F1:F10)",
      keywords: {
        minimum: 0.9,
        smallest: 0.8,
        number: 0.7,
        range: 0.6,
        statistical: 0.5
      }
    },
    {
      name: "MAX",
      category: "Statistical",
      description: "Returns the largest number in a range.",
      sheets: "=MAX(range)",
      excel: "=MAX(range)",
      example: "Maximum value in F1:F10: =MAX(F1:F10)",
      keywords: {
        maximum: 0.9,
        largest: 0.8,
        number: 0.7,
        range: 0.6,
        statistical: 0.5
      }
    },
    {
      name: "STDEV",
      category: "Statistical",
      description: "Calculates the standard deviation of a range.",
      sheets: "=STDEV(range)",
      excel: "=STDEV(range)",
      example: "Standard deviation of G1:G20: =STDEV(G1:G20)",
      keywords: {
        standard: 0.9,
        deviation: 0.8,
        numbers: 0.7,
        range: 0.6,
        statistical: 0.5
      }
    },
    {
      name: "FIND",
      category: "Text",
      description: "Returns the position of a text string within another.",
      sheets: "=FIND(find_text, within_text, [start_num])",
      excel: "=FIND(find_text, within_text, [start_num])",
      example: "Find position of 'text' in A1: =FIND(\"text\", A1)",
      keywords: {
        find: 0.9,
        search: 0.8,
        text: 0.7,
        position: 0.6,
        string: 0.5
      }
    },
    {
      name: "LEFT",
      category: "Text",
      description: "Extracts characters from the start of a text string.",
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
      description: "Extracts characters from the end of a text string.",
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
      name: "LEN",
      category: "Text",
      description: "Returns the length of a text string.",
      sheets: "=LEN(text)",
      excel: "=LEN(text)",
      example: "Length of text in A1: =LEN(A1)",
      keywords: {
        length: 0.9,
        text: 0.8,
        count: 0.7,
        characters: 0.6,
        string: 0.5
      }
    },
    {
      name: "TEXTJOIN",
      category: "Text",
      description: "Combines text from multiple ranges with a delimiter.",
      sheets: "=TEXTJOIN(delimiter, ignore_empty, text1, [text2, ...])",
      excel: "=TEXTJOIN(delimiter, ignore_empty, text1, [text2, ...])",
      example: "Join A1:A5 with commas: =TEXTJOIN(\",\", TRUE, A1:A5)",
      keywords: {
        join: 0.9,
        text: 0.8,
        combine: 0.7,
        delimiter: 0.6,
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
      name: "NOW",
      category: "Date",
      description: "Returns the current date and time.",
      sheets: "=NOW()",
      excel: "=NOW()",
      example: "Get current date and time in E1: =NOW()",
      keywords: {
        now: 0.9,
        date: 0.8,
        time: 0.7,
        current: 0.6
      }
    },
    {
      name: "DATEDIF",
      category: "Date",
      description: "Calculates the difference between two dates.",
      sheets: "=DATEDIF(start_date, end_date, unit)",
      excel: "=DATEDIF(start_date, end_date, unit)",
      example: "Days between A1 and B1: =DATEDIF(A1, B1, \"D\")",
      keywords: {
        difference: 0.9,
        date: 0.8,
        days: 0.7,
        months: 0.6,
        years: 0.5
      }
    },
    {
      name: "EOMONTH",
      category: "Date",
      description: "Returns the last day of the month for a given date.",
      sheets: "=EOMONTH(start_date, months)",
      excel: "=EOMONTH(start_date, months)",
      example: "Last day of month for A1: =EOMONTH(A1, 0)",
      keywords: {
        month: 0.9,
        end: 0.8,
        date: 0.7,
        last: 0.6
      }
    },
    {
      name: "WORKDAY",
      category: "Date",
      description: "Returns a date after a number of working days.",
      sheets: "=WORKDAY(start_date, days, [holidays])",
      excel: "=WORKDAY(start_date, days, [holidays])",
      example: "Date 5 workdays after A1: =WORKDAY(A1, 5)",
      keywords: {
        workday: 0.9,
        date: 0.8,
        working: 0.7,
        days: 0.6
      }
    },
    {
      name: "PMT",
      category: "Financial",
      description: "Calculates the payment for a loan.",
      sheets: "=PMT(rate, nper, pv, [fv], [type])",
      excel: "=PMT(rate, nper, pv, [fv], [type])",
      example: "Monthly payment for $10,000 loan at 5% over 3 years: =PMT(5%/12, 36, 10000)",
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
      example: "NPV of cash flows in B1:B10 at 10%: =NPV(10%, B1:B10)",
      keywords: {
        npv: 0.9,
        present: 0.8,
        value: 0.7,
        investment: 0.6,
        financial: 0.5
      }
    },
    {
      name: "FV",
      category: "Financial",
      description: "Calculates the future value of an investment.",
      sheets: "=FV(rate, nper, pmt, [pv], [type])",
      excel: "=FV(rate, nper, pmt, [pv], [type])",
      example: "Future value of $1000 at 5% over 5 years: =FV(5%, 5, 0, -1000)",
      keywords: {
        future: 0.9,
        value: 0.8,
        investment: 0.7,
        financial: 0.6,
        rate: 0.5
      }
    },
    {
      name: "IRR",
      category: "Financial",
      description: "Calculates the internal rate of return for cash flows.",
      sheets: "=IRR(values, [guess])",
      excel: "=IRR(values, [guess])",
      example: "IRR for cash flows in B1:B10: =IRR(B1:B10)",
      keywords: {
        irr: 0.9,
        return: 0.8,
        investment: 0.7,
        financial: 0.6,
        rate: 0.5
      }
    },
    {
      name: "PV",
      category: "Financial",
      description: "Calculates the present value of an investment.",
      sheets: "=PV(rate, nper, pmt, [fv], [type])",
      excel: "=PV(rate, nper, pmt, [fv], [type])",
      example: "Present value of $1000 annual payments at 5% for 5 years: =PV(5%, 5, 1000)",
      keywords: {
        present: 0.9,
        value: 0.8,
        investment: 0.7,
        financial: 0.6,
        rate: 0.5
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
        true: 0.5
      }
    },
    {
      name: "IFERROR",
      category: "Logical",
      description: "Returns a value if no error, otherwise an alternative.",
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
      name: "OR",
      category: "Logical",
      description: "Returns TRUE if any condition is true.",
      sheets: "=OR(logical1, [logical2, ...])",
      excel: "=OR(logical1, [logical2, ...])",
      example: "Check if A1 > 50 or B1 < 100: =OR(A1>50, B1<100)",
      keywords: {
        or: 0.9,
        any: 0.8,
        condition: 0.7,
        logical: 0.6,
        true: 0.5
      }
    },
    {
      name: "IFS",
      category: "Logical",
      description: "Evaluates multiple conditions and returns a value.",
      sheets: "=IFS(logical_test1, value1, [logical_test2, value2, ...])",
      excel: "=IFS(logical_test1, value1, [logical_test2, value2, ...])",
      example: "Check C1 ranges: =IFS(C1>100, \"High\", C1>50, \"Medium\", TRUE, \"Low\")",
      keywords: {
        ifs: 0.9,
        multiple: 0.8,
        condition: 0.7,
        logical: 0.6,
        value: 0.5
      }
    },
    {
      name: "VLOOKUP",
      category: "Lookup",
      description: "Searches for a value in the first column of a range.",
      sheets: "=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])",
      excel: "=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])",
      example: "Find value in A1:C10: =VLOOKUP(B1, A1:C10, 2, FALSE)",
      keywords: {
        lookup: 0.9,
        search: 0.8,
        find: 0.7,
        value: 0.6,
        table: 0.5
      }
    },
    {
      name: "XLOOKUP",
      category: "Lookup",
      description: "Searches a range and returns a value (Excel only, Sheets: INDEX/MATCH).",
      sheets: "Use INDEX/MATCH: =INDEX(return_range, MATCH(lookup_value, lookup_range, 0))",
      excel: "=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found])",
      example: "Excel: Find value in A1:A20, return from B1:B20: =XLOOKUP(C1, A1:A20, B1:B20)",
      keywords: {
        lookup: 0.9,
        search: 0.8,
        find: 0.7,
        value: 0.6,
        advanced: 0.5
      }
    },
    {
      name: "INDEX/MATCH",
      category: "Lookup",
      description: "Searches for a value and returns a value from another range.",
      sheets: "=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))",
      excel: "=INDEX(return_range, MATCH(lookup_value, lookup_range, 0))",
      example: "Find value in A1:A20, return from B1:B20: =INDEX(B1:B20, MATCH(C1, A1:A20, 0))",
      keywords: {
        lookup: 0.9,
        search: 0.8,
        index: 0.7,
        match: 0.7,
        value: 0.6
      }
    },
    {
      name: "HLOOKUP",
      category: "Lookup",
      description: "Searches for a value in the first row of a range.",
      sheets: "=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])",
      excel: "=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])",
      example: "Find value in A1:E1: =HLOOKUP(B1, A1:E10, 2, FALSE)",
      keywords: {
        lookup: 0.9,
        search: 0.8,
        horizontal: 0.7,
        value: 0.6,
        table: 0.5
      }
    },
    {
      name: "FILTER",
      category: "Array",
      description: "Filters a range based on a condition (Sheets only, Excel: Advanced Filter).",
      sheets: "=FILTER(range, condition)",
      excel: "Use Advanced Filter or Power Query",
      example: "Filter A1:A20 where B1:B20 > 50: =FILTER(A1:A20, B1:B20>50)",
      keywords: {
        filter: 0.9,
        select: 0.8,
        condition: 0.7,
        range: 0.6,
        array: 0.5
      }
    },
    {
      name: "ARRAYFORMULA",
      category: "Array",
      description: "Applies a formula to an entire range (Sheets only).",
      sheets: "=ARRAYFORMULA(formula)",
      excel: "Use dynamic arrays or Ctrl+Shift+Enter",
      example: "Add A1:A10 and B1:B10: =ARRAYFORMULA(A1:A10 + B1:B10)",
      keywords: {
        array: 0.9,
        formula: 0.8,
        range: 0.7,
        multiple: 0.6
      }
    },
    {
      name: "UNIQUE",
      category: "Array",
      description: "Returns unique values from a range.",
      sheets: "=UNIQUE(range)",
      excel: "=UNIQUE(range) (Microsoft 365)",
      example: "Unique values in A1:A20: =UNIQUE(A1:A20)",
      keywords: {
        unique: 0.9,
        distinct: 0.8,
        values: 0.7,
        range: 0.6,
        array: 0.5
      }
    },
    {
      name: "SORT",
      category: "Array",
      description: "Sorts a range by specified columns.",
      sheets: "=SORT(range, sort_column, is_ascending)",
      excel: "=SORT(range, [sort_index], [sort_order])",
      example: "Sort A1:B20 by column B ascending: =SORT(A1:B20, 2, TRUE)",
      keywords: {
        sort: 0.9,
        order: 0.8,
        range: 0.7,
        column: 0.6,
        array: 0.5
      }
    },
    {
      name: "QUERY",
      category: "Database",
      description: "Runs a Google Sheets query on data (Sheets only).",
      sheets: "=QUERY(data, query, [headers])",
      excel: "Use Power Query or PivotTables",
      example: "Select A where B > 50: =QUERY(A1:B20, \"SELECT A WHERE B > 50\")",
      keywords: {
        query: 0.9,
        select: 0.8,
        database: 0.7,
        filter: 0.6,
        data: 0.5
      }
    },
    {
      name: "DSUM",
      category: "Database",
      description: "Sums a database column based on criteria.",
      sheets: "=DSUM(database, field, criteria)",
      excel: "=DSUM(database, field, criteria)",
      example: "Sum B1:B20 where A1:A20 = \"Yes\": =DSUM(A1:B20, \"B\", C1:D2)",
      keywords: {
        sum: 0.9,
        database: 0.8,
        criteria: 0.7,
        column: 0.6,
        data: 0.5
      }
    },
    {
      name: "DCOUNT",
      category: "Database",
      description: "Counts database records meeting criteria.",
      sheets: "=DCOUNT(database, field, criteria)",
      excel: "=DCOUNT(database, field, criteria)",
      example: "Count records where A1:A20 = \"Yes\": =DCOUNT(A1:B20, \"B\", C1:D2)",
      keywords: {
        count: 0.9,
        database: 0.8,
        criteria: 0.7,
        records: 0.6,
        data: 0.5
      }
    },
    {
      name: "ISBLANK",
      category: "Information",
      description: "Checks if a cell is empty.",
      sheets: "=ISBLANK(value)",
      excel: "=ISBLANK(value)",
      example: "Check if A1 is empty: =ISBLANK(A1)",
      keywords: {
        blank: 0.9,
        empty: 0.8,
        check: 0.7,
        cell: 0.6,
        information: 0.5
      }
    },
    {
      name: "ISNUMBER",
      category: "Information",
      description: "Checks if a value is a number.",
      sheets: "=ISNUMBER(value)",
      excel: "=ISNUMBER(value)",
      example: "Check if A1 is a number: =ISNUMBER(A1)",
      keywords: {
        number: 0.9,
        check: 0.8,
        value: 0.7,
        cell: 0.6,
        information: 0.5
      }
    },
    {
      name: "ERROR.TYPE",
      category: "Information",
      description: "Returns a number corresponding to an error type.",
      sheets: "=ERROR.TYPE(error_val)",
      excel: "=ERROR.TYPE(error_val)",
      example: "Get error type in A1: =ERROR.TYPE(A1)",
      keywords: {
        error: 0.9,
        type: 0.8,
        check: 0.7,
        value: 0.6,
        information: 0.5
      }
    },
    {
      name: "ISTEXT",
      category: "Information",
      description: "Checks if a value is text.",
      sheets: "=ISTEXT(value)",
      excel: "=ISTEXT(value)",
      example: "Check if A1 is text: =ISTEXT(A1)",
      keywords: {
        text: 0.9,
        check: 0.8,
        value: 0.7,
        cell: 0.6,
        information: 0.5
      }
    },
    {
      name: "Conditional Formatting - Overdue Dates",
      category: "Conditional Formatting",
      description: "Highlights dates before today.",
      sheets: "Apply to A1:A20: =A1<TODAY()",
      excel: "Apply to A1:A20: =A1<TODAY()",
      example: "Highlight overdue dates in A1:A20: Set rule =A1<TODAY(), red fill.",
      keywords: {
        highlight: 0.9,
        overdue: 0.8,
        date: 0.7,
        today: 0.7,
        notification: 0.6,
        conditional: 0.5,
        formatting: 0.5
      }
    },
    {
      name: "Conditional Formatting - Above Threshold",
      category: "Conditional Formatting",
      description: "Highlights values above a threshold.",
      sheets: "Apply to B1:B20: =B1>100",
      excel: "Apply to B1:B20: =B1>100",
      example: "Highlight values in B1:B20 >100: Set rule =B1>100, green fill.",
      keywords: {
        highlight: 0.9,
        above: 0.8,
        threshold: 0.7,
        greater: 0.6,
        notification: 0.6,
        conditional: 0.5,
        formatting: 0.5
      }
    },
    {
      name: "Conditional Formatting - Contains Text",
      category: "Conditional Formatting",
      description: "Highlights cells containing specific text.",
      sheets: "Apply to C1:C20: =SEARCH(\"text\", C1)",
      excel: "Apply to C1:C20: =SEARCH(\"text\", C1)",
      example: "Highlight cells in C1:C20 with 'text': Set rule =SEARCH(\"text\", C1), yellow fill.",
      keywords: {
        highlight: 0.9,
        text: 0.8,
        contains: 0.7,
        search: 0.6,
        notification: 0.6,
        conditional: 0.5,
        formatting: 0.5
      }
    },
    {
      name: "LET",
      category: "Advanced",
      description: "Assigns names to calculations for reuse (Excel 365, Sheets limited support).",
      sheets: "Limited support; use named ranges",
      excel: "=LET(name, value, calculation)",
      example: "Excel: Simplify formula: =LET(x, A1*2, x+10)",
      keywords: {
        let: 0.9,
        assign: 0.8,
        name: 0.7,
        calculation: 0.6,
        advanced: 0.5
      }
    },
    {
      name: "LAMBDA",
      category: "Advanced",
      description: "Creates custom reusable functions (Excel 365, Sheets not supported).",
      sheets: "Not supported; use Apps Script",
      excel: "=LAMBDA(parameter, calculation)(arguments)",
      example: "Excel: Double A1: =LAMBDA(x, x*2)(A1)",
      keywords: {
        lambda: 0.9,
        custom: 0.8,
        function: 0.7,
        advanced: 0.6,
        calculation: 0.5
      }
    },
    {
      name: "MAP",
      category: "Advanced",
      description: "Applies a LAMBDA to each value in arrays (Excel 365, Sheets not supported).",
      sheets: "Not supported; use ARRAYFORMULA",
      excel: "=MAP(array1, [array2, ...], LAMBDA)",
      example: "Excel: Double values in A1:A10: =MAP(A1:A10, LAMBDA(x, x*2))",
      keywords: {
        map: 0.9,
        apply: 0.8,
        array: 0.7,
        lambda: 0.6,
        advanced: 0.5
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
    handle: "iferror",
    minimum: "min",
    maximum: "max",
    length: "len",
    end: "eomonth",
    future: "fv",
    any: "or",
    select: "filter",
    distinct: "unique",
    database: "query",
    empty: "isblank",
    assign: "let",
    generate: "rand",
    decimal: "round",
    integer: "randbetween",
    standard: "stdev",
    working: "workday",
    return: "irr",
    custom: "lambda",
    apply: "map"
  };