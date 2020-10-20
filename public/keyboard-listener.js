export default function createKeyBoardListener(document) {
    //Lista dos observers
    const state = {
        observers: []
    }
    //Recebe uma função observe. Essa é a forma que um subject lê um observer
    function subscribe(observerFunction) {
        state.observers.push(observerFunction)
    }

    //Função para notificação as funções que estão no observe
    function notifyAll(command) {
        //console.log(`Notifying ${state.observers.lenght} observer`)

        for (const observerFunction of state.observers) {
            observerFunction(command)
        }
    }
    //Toda vez que uma tecla for apertada, chamar a função handleKeyDown
    document.addEventListener('keydown', handleKeydown)

    //Função que armazena a tecla apertada e o jogador que a apertou, logo após notificando para todos os subjects do observer
    function handleKeydown(event) {
        const keyPressed = event.key

        const command = {
            playerId: 'player1',
            keyPressed
        }
        notifyAll(command)
    }
    return {
        subscribe
    }
}