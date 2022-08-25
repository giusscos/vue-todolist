# ToDo List

### Traccia

- Fare una todo list;
- Ogni todo sarà un oggetto, formato da due proprietà:
    - text, una stringa che indica il testo del todo;
    - done, un booleano (true/false) che indica se il todo è stato fatto oppure no;

#### MILESTONE 1
- Stampare all’interno di una lista, un item per ogni todo;
- Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato;

#### MILESTONE 2
- Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene segnato come completato.

#### MILESTONE 3
- Predisporre un campo di input testuale e un pulsante “aggiungi”:
    - cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

### Bonus

- Oltre al click sul pulsante aggiungi, intercettare anche il tasto ENTER per aggiungere il todo alla lista;
- Cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa);
- Utilizzando una proprietà computed, visualizzare nella pagina una seconda lista che contenga solo i todo che sono stati segnati come completati (quelli con done === true );
