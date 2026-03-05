import Map "mo:core/Map";
import List "mo:core/List";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Migration "migration";

(with migration = Migration.run)
actor {
  type MenuItem = {
    id : Nat;
    name : Text;
    description : Text;
    category : Text;
    price : Float;
  };

  let menu = Map.empty<Nat, MenuItem>();
  var nextId = 1;

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

  public type ContactForm = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
  };

  let contactForms = List.empty<ContactForm>();

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

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async Nat {
    let form = {
      id = nextId;
      name;
      email;
      message;
    };
    contactForms.add(form);
    nextId += 1;
    form.id;
  };

  public query ({ caller }) func getAllContactForms() : async [ContactForm] {
    contactForms.toArray();
  };

  public query ({ caller }) func getContactFormById(id : Nat) : async ContactForm {
    let found = contactForms.find(
      func(f) { f.id == id }
    );
    switch (found) {
      case (null) { Runtime.trap("Contact form not found") };
      case (?form) { form };
    };
  };

  public shared ({ caller }) func addMenuItem(
    name : Text,
    description : Text,
    category : Text,
    price : Float,
  ) : async Nat {
    let id = nextId;
    let menuItem = {
      id;
      name;
      description;
      category;
      price;
    };
    menu.add(id, menuItem);
    nextId += 1;
    id;
  };

  public query ({ caller }) func getMenuItems() : async [MenuItem] {
    menu.values().toArray();
  };

  public query ({ caller }) func getMenuItemById(id : Nat) : async MenuItem {
    switch (menu.get(id)) {
      case (null) { Runtime.trap("Menu item not found") };
      case (?item) { item };
    };
  };

  public query ({ caller }) func getMenuItemsByCategory(category : Text) : async [MenuItem] {
    menu.values().toArray().filter(func(item) { Text.equal(item.category, category) });
  };
};
