let name1 ="Brenda Kaye";





function parseAndDisplayName(name1)
{
    let indexSpace = name1.indexOf(" ");
    console.log(`Name: ${name1} \n First name: ${name1.substring(0,indexSpace)} \n Last name: ${name1.substring(indexSpace)}`)
}

parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");


