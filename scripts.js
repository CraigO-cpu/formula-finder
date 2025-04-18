function findFormula() {
    const input = document.getElementById('userInput').value.toLowerCase().trim();
    const category = document.getElementById('categoryFilter').value;
  
    let filteredFormulas = formulas;
    if (category !== "All") {
      filteredFormulas = formulas.filter(formula => formula.category === category);
    }
  
    if (!input && category === "All") {
      document.getElementById('results').innerHTML = '<p>Please enter a description or select a category.</p>';
      return;
    }
  
    const stopWords = ['i', 'need', 'to', 'in', 'a', 'the', 'for', 'with', 'of', 'and', 'is', 'are'];
    let tokens = input ? input.split(/\s+/).filter(word => !stopWords.includes(word)) : [];
    tokens = tokens.map(word => synonyms[word] || word);
  
    const scoredFormulas = filteredFormulas.map(formula => {
      let score = 0;
      if (tokens.length > 0) {
        tokens.forEach((token, index) => {
          if (formula.keywords[token]) {
            score += formula.keywords[token];
            score += formula.keywords[token] * (1 - index / tokens.length) * 0.15; // Reduced proximity boost
            if (formula.category === "Conditional Formatting" && (token === "highlight" || token === "notification")) {
              score += 0.3;
            }
          }
        });
      } else {
        score = 1; // Show all in category if no input
      }
      return { formula, score };
    });
  
    const results = scoredFormulas
      .filter(item => item.score > 0.4 || (category !== "All" && !input)) // Lowered threshold for more matches
      .sort((a, b) => b.score - a.score)
      .slice(0, 10); // Increased limit for comprehensive results
  
    const resultsDiv = document.getElementById('results');
    if (results.length === 0) {
      resultsDiv.innerHTML = '<p>No matching formulas found. Try rephrasing or changing the category.</p>';
      return;
    }
  
    resultsDiv.innerHTML = '';
    results.forEach(({ formula }) => {
      const card = document.createElement('div');
      card.className = 'result-card';
      card.innerHTML = `
        <h3>${formula.name}</h3>
        <p><strong>Category:</strong> ${formula.category}</p>
        <p><strong>Description:</strong> ${formula.description}</p>
        <p><strong>Google Sheets:</strong> ${formula.sheets} <button class="copy-btn" onclick="copyToClipboard('${formula.sheets}')">Copy</button></p>
        <p><strong>Excel:</strong> ${formula.excel} <button class="copy-btn" onclick="copyToClipboard('${formula.excel}')">Copy</button></p>
        <p><strong>Example:</strong> ${formula.example}</p>
      `;
      resultsDiv.appendChild(card);
    });
  }
  
  function filterByCategory() {
    findFormula();
  }
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      alert('Formula copied to clipboard!');
    });
  }