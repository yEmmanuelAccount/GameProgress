// add.js

document.addEventListener('DOMContentLoaded', function() {
    // Recupera as entradas salvas (se houver) do localStorage
    let dataEntries = JSON.parse(localStorage.getItem('dataEntries')) || [];
  
    const form = document.getElementById('dataForm');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      // Coleta os valores do formulário
      const entry = {
        data: document.getElementById('dataInput').value,
        queijosColetados: document.getElementById('queijosColetados').value,
        queijosLoja: document.getElementById('queijosLoja').value,
        firsts: document.getElementById('firsts').value,
        bootcamp: document.getElementById('bootcamp').value,
        morangos: document.getElementById('morangos').value,
        pontosAventura: document.getElementById('pontosAventura').value,
        mapasCompletados: document.getElementById('mapasCompletados').value,
        pontosLojaParkour: document.getElementById('pontosLojaParkour').value,
        classe: document.getElementById('classe').value,
        reputacao: document.getElementById('reputacao').value,
        vitorias: document.getElementById('vitorias').value,
        podios: document.getElementById('podios').value,
        mapasCompletosCircuit: document.getElementById('mapasCompletosCircuit').value,
        rounds: document.getElementById('rounds').value,
        savesNormal: document.getElementById('savesNormal').value,
        savesDificil: document.getElementById('savesDificil').value,
        savesDivino: document.getElementById('savesDivino').value
      };
  
      // Adiciona a nova entrada ao array
      dataEntries.push(entry);
      // Atualiza o localStorage
      localStorage.setItem('dataEntries', JSON.stringify(dataEntries));
  
      alert('Data salva com sucesso!');
      form.reset();
    });
  
    // Evento do botão para baixar o CSV
    document.getElementById('downloadCsv').addEventListener('click', function() {
      if(dataEntries.length === 0) {
        alert("Nenhuma data para baixar!");
        return;
      }
      // Cria o conteúdo CSV com cabeçalho e linhas para cada entrada
      let csvContent = "data,queijosColetados,queijosLoja,firsts,bootcamp,morangos,pontosAventura,mapasCompletados,pontosLojaParkour,classe,reputacao,vitorias,podios,mapasCompletosCircuit,rounds,savesNormal,savesDificil,savesDivino\n";
      dataEntries.forEach(entry => {
        const row = [
          entry.data,
          entry.queijosColetados,
          entry.queijosLoja,
          entry.firsts,
          entry.bootcamp,
          entry.morangos,
          entry.pontosAventura,
          entry.mapasCompletados,
          entry.pontosLojaParkour,
          entry.classe,
          entry.reputacao,
          entry.vitorias,
          entry.podios,
          entry.mapasCompletosCircuit,
          entry.rounds,
          entry.savesNormal,
          entry.savesDificil,
          entry.savesDivino
        ].join(",");
        csvContent += row + "\n";
      });
  
      // Cria um Blob e dispara o download do arquivo CSV
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", "datas.csv");
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });
  