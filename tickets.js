
function main(ticketInfo, criterion) {
    let schedule = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    ticketInfo.forEach(city => {
        let [destination, price, status] = city.split("|");
        schedule.push(new Ticket(destination, price, status));
    })

    if (criterion === "price") {
        schedule.sort((a,b) => a.price - b.price) //
    } else if (criterion === "destination") {
        schedule.sort((a,b) => a.destination.localeCompare(b.destination));
    } else if (criterion === "status") {
        schedule.sort((a,b) => a.status.localeCompare(b.status))
    } else {
        return "Error"
    }

    schedule.sort()
    console.log(schedule);
}

main(['Philadelphia|94.20|available','New York City|95.99|available','New York City|95.99|sold','Boston|126.20|departed'],"status")