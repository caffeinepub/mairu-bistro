import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Nat "mo:core/Nat";

actor {
  public type Reservation = {
    confirmationId : Nat;
    guestName : Text;
    phoneNumber : Text;
    date : Text;
    time : Text;
    partySize : Nat;
    notes : ?Text;
  };

  module Reservation {
    public func compareByDateTime(a : Reservation, b : Reservation) : Order.Order {
      switch (Text.compare(a.date, b.date)) {
        case (#equal) { Text.compare(a.time, b.time) };
        case (order) { order };
      };
    };

    public func compareByGuestName(a : Reservation, b : Reservation) : Order.Order {
      Text.compare(a.guestName, b.guestName);
    };
  };

  let reservations = List.empty<Reservation>();
  var nextId = 1;

  // Returns confirmationId
  public shared ({ caller }) func makeReservation(
    guestName : Text,
    phoneNumber : Text,
    date : Text,
    time : Text,
    partySize : Nat,
    notes : ?Text,
  ) : async Nat {
    let reservation = {
      confirmationId = nextId;
      guestName;
      phoneNumber;
      date;
      time;
      partySize;
      notes;
    };
    reservations.add(reservation);
    nextId += 1;
    reservation.confirmationId;
  };

  public query ({ caller }) func getAllReservationsSortedByDateTime() : async [Reservation] {
    reservations.toArray().sort(Reservation.compareByDateTime);
  };

  public query ({ caller }) func getAllReservationsSortedByGuestName() : async [Reservation] {
    reservations.toArray().sort(Reservation.compareByGuestName);
  };

  public query ({ caller }) func getReservationById(id : Nat) : async Reservation {
    let found = reservations.find(
      func(r) { r.confirmationId == id }
    );
    switch (found) {
      case (null) { Runtime.trap("Reservation not found") };
      case (?reservation) { reservation };
    };
  };
};
