// export default function Product() {
//     return (
//       <div>
//         <h2>Tacos</h2>
//         <p>Price: 999 credits</p>
//       </div>
//     );
//   }

//  




interface ProductProps {
        name: string;
        imgUrl: string;
        price: number;
      };
    
      export default function Product({name, imgUrl, price}: ProductProps) {
        return (
            <div>
                <h2>{name}</h2>
                <img src={imgUrl} alt={name} width="320" />
                <p>Price: {price} credits </p>
            </div>
        );
      };



// interface UserMailBox {
//     username: string;
//     messages: string[];
// }

// export default function MailBox({username, messages}: UserMailBox) {
//     return (
//        <>
//        <p>Hello: {username}</p>
//        {messages.length > 0? (
//         <>
//         <p>You have {messages.length} unread messages</p>
//         <p>Check your inbox to read them</p>
//         <button>Open inbox</button>
//         </> 
//        ) : (
//         <p>No unread messages</p>
//        )} 
//        </>
//     )
// }