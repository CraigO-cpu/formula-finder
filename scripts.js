function findFormula() {
    const input = document.getElementById('userInput').value.toLowerCase().trim();
    if (!input) {
      document.getElementById('results').innerHTML = '<p>Please enter a description.</p>';
      return;
    }
  
    const stopWords = ['i', 'need', 'to', 'in', 'a', 'the', 'for', 'with', 'of', 'and', 'is', 'are'];
    let tokens = input.split(/\s+/).filter(word => !stopWords.includes(word));
    tokens = tokens.map(word => synonyms[word] || word);
  
    const scoredFormulas = formulas.map(formula => {
      let score = 0;
      tokens.forEach((token, index) => {
        if (formula.keywords[token]) {
          score += formula.keywords[token];
          score += formula.keywords[token] * (1 - index / tokens.length) * 0.2;
          if (formula.category === "Conditional Formatting" && (token === "highlight" || token === "notification")) {
            score += 0.3; // Boost for conditional formatting
          }
        }
      });
      return { formula, score };
    });
  
    const results = scoredFormulas
      .filter(item => item.score > 0.5)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  
    const resultsDiv = document.getElementById('results');
    if (results.length === 0) {
      resultsDiv.innerHTML = '<p>No matching formulas found. Try rephrasing your description.</p>';
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
  
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      alert('Formula copied to clipboard!');
    });
  }