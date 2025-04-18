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
        condition: 0.5
      }
    },
    {
      name: "COUNTIF",
      category: "Statistical",
      description: "Counts cells that meet a criterion.",
      sheets: "=COUNTIF(range, criterion)",
      excel: "=COUNTIF(range, criterion)",
      example: "Count cells in A1:A10 with text: =COUNTIF(A1:A10, \"*\")",
      keywords: {
        count: 0.9,
        number: 0.7,
        text: 0.6,
        cells: 0.5,
        criterion: 0.5,
        condition: 0.5
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
        column: 0.5
      }
    }
  ];
  
  const synonyms = {
    total: "sum",
    add: "sum",
    greater: "above",
    number: "count",
    search: "lookup",
    find: "lookup"
  };