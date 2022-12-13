class Flight {
  constructor(number, airline, origin, destination, depTime, arrivalTime, arrivalGate) {
    this.number = number;
    this.airline = airline;
    this.origin = origin;
    this.destination = destination;
    this.depTime = depTime;
    this.arrivalTime = arrivalTime;
    this.arrivalGate = arrivalGate;
  }

  // Returns the duration of the flight (gate to gate) in hours.
  duration() {

    let dep = this.depTime[1].split(":");
    let depHours = (parseInt(dep[0]) * 3600 + parseInt(dep[1]) * 60) / 3600

    let arrival = this.arrivalTime[1].split(":");
    let arrivalHours = (parseInt(arrival[0]) * 3600 + parseInt(arrival[1]) * 60) / 3600

    return parseInt(arrivalHours - depHours)
  }

}

// Create 5 flight objects
let flights = [
  new Flight( "ASA1077", "A319", "Washington Dulles Intl (KIAD)", "San Francisco Intl (KSFO)", ['Wed', '07:32', 'PM', 'EST'], ['Wed', '10:10', 'PM', 'PST'], "C21"),
  new Flight( "ASA1088","A320", "San Francisco Intl (KSFO)", "Washington Dulles Intl (KIAD)", ['Wed', '03:58', 'PM', 'PST'], ['Wed', '11:28', 'PM', 'EST'], "A15"),
  new Flight( "ASA1097", "A320", "Washington Dulles Intl (KIAD)", "Los Angeles Intl (KLAX)	", ['Wed', '05:06', 'PM', 'EST'], ['Wed', '07:24', 'PM', 'PST'], "B5"),
  new Flight( "ASA11", "B739", "Newark Liberty Intl (KEWR)", "Seattle-Tacoma Intl (KSEA)", ['Wed', '05:00', 'PM', 'EST'], ['Wed', '07:27', 'PM', 'PST'], "D8"),
  new Flight( "ASA1113", "A320", "Will Rogers World (KOKC)", "Seattle-Tacoma Intl (KSEA)",[ 'Wed', '05:40', 'PM', 'CST'], ['Wed', '07:11', 'PM', 'PST'], "E1")
];
  