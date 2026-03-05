import Map "mo:core/Map";
import List "mo:core/List";
import Nat "mo:core/Nat";

module {
  type OldReservation = {
    confirmationId : Nat;
    guestName : Text;
    phoneNumber : Text;
    date : Text;
    time : Text;
    partySize : Nat;
    notes : ?Text;
  };

  type OldActor = {
    reservations : List.List<OldReservation>;
    nextId : Nat;
  };

  type MenuItem = {
    id : Nat;
    name : Text;
    description : Text;
    category : Text;
    price : Float;
  };

  type NewReservation = {
    confirmationId : Nat;
    guestName : Text;
    phoneNumber : Text;
    date : Text;
    time : Text;
    partySize : Nat;
    notes : ?Text;
  };

  type ContactForm = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
  };

  type NewActor = {
    reservations : List.List<NewReservation>;
    menu : Map.Map<Nat, MenuItem>;
    nextId : Nat;
    contactForms : List.List<ContactForm>;
  };

  public func run(old : OldActor) : NewActor {
    {
      old with
      menu = Map.empty<Nat, MenuItem>();
      contactForms = List.empty<ContactForm>();
    };
  };
};
