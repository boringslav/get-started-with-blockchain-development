pragma solidity >=0.5.12<=0.8.9;

contract Shipping{
    enum ShippingStatus {Pending, Shipped, Delivered}//predefined values for shipping listed as enums
    ShippingStatus private status; //save enum ShippingStatus in variable status

    event LogNewAlert(string description); //event to launch when package has arrived

    constructor() {//initializes our contract state (sets enum to Pending once the program starts)
        status = ShippingStatus.Pending;
    }

    function Shipped() public {
        status = ShippingStatus.Shipped;
    }

    function Delivered() public {
        status = ShippingStatus.Delivered;
    }
    
     // Function to get the status of the shipping
    function getStatus(ShippingStatus _status) internal pure returns (string memory) {
     // Check the current status and return the correct name
     if (ShippingStatus.Pending == _status) return "Pending";
     if (ShippingStatus.Shipped == _status) return "Shipped";
     if (ShippingStatus.Delivered == _status) return "Delivered";
    }

   // Get status of your shipped item
    function Status() public view returns (string memory) {
         ShippingStatus _status = status;
         return getStatus(_status);
    }
 
}