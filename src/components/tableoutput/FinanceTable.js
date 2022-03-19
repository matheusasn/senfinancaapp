import React from 'react'
import "./financeTable.css"
function FinanceTable(){
  return (
    <div class="header_fixed">
        <table>
            <thead>
                <tr>
                    <th>S No.</th>
                    <th>Image</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>                  
                    <td>Rakhi Gupta</td>
                    <td>rakhigupta@gmail.com</td>
                    <td>Engineering</td>
                    <td><button>View</button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Anjali</td>
                    <td>anjali@gmail.com</td>
                    <td>Engineering</td>
                    <td><button>View</button></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Vejata Gupta</td>
                    <td>Vejata@gmail.com</td>
                    <td>Engineering</td>
                    <td><button>View</button></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Shweta</td>
                    <td>Shweta@gmail.com</td>
                    <td>Engineering</td>
                    <td><button>View</button></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Adarsh</td>
                    <td>Adarsh@gmail.com</td>
                    <td>Engineering</td>
                    <td><button>View</button></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Monti</td>
                    <td>Monti@gmail.com</td>
                    <td>Engineering</td>
                    <td><button>View</button></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Arpit</td>
                    <td>Arpit@gmail.com</td>
                    <td>Engineering</td>
                    <td><button>View</button></td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Priya</td>
                    <td>priya@gmail.com</td>
                    <td>Engineering</td>
                    <td><button>View</button></td>
                </tr>
            </tbody>
        </table>
    </div>

  );
}

export default FinanceTable;