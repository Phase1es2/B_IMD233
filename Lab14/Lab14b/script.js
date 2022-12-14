function testStateMachine() {

    var states = ["idle", "s1", "s2", "s3", "s4"];
    var i = 0;
    var cmd = "";

    do {
        cmd = prompt("Enter a command:", "next");

        switch (cmd) {
            case "next":
                alert("StateMachine Status : " + states[i]);
                i++;
                if (i > 3) {
                    i = 0;
                }
                break;
            case "quit":
                alert("End");
                exit(0);
                break;
            case "exit":
                alert("End");
                exit(0);
                break;
            default:
                alert("Invalid Choice");
        }
    } while (true);

}