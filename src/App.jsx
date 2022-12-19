import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Home } from "./Home";
import { About } from "./About";
import { PostsNew } from "./PostsNew";
import { Login } from "./Login";

function App() {
  return (
    // <div>
    <BrowserRouter>
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts-new" element={<PostsNew />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    // </div>
  );
}

export default App;

// MY DATA
//   return (
//     <div id="posts-index">
//       <h1>All posts</h1>
//       <div>
//         <h2>Big mood</h2>
//       </div>
//       <div>
//         Big mood direct trade sustainable disrupt dreamcatcher cred. Wolf scenester cornhole asymmetrical. Swag
//         waistcoat cardigan keffiyeh. Disrupt humblebrag roof party try-hard copper mug lomo, snackwave cornhole photo
//         booth big mood tacos.
//       </div>
//       <div>
//         <img
//           src="data:image/png;base64,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"
//           alt="taco"
//         />
//       </div>

//       <div>
//         <h2>Selfies normcore</h2>
//       </div>
//       <div>
//         Selfies normcore venmo, williamsburg air plant put a bird on it tumblr fingerstache kogi. Mumblecore coloring
//         book banjo small batch etsy microdosing, cloud bread fingerstache try-hard prism. Letterpress cold-pressed
//         post-ironic, normcore actually fixie typewriter occupy authentic poutine church-key.
//       </div>
//       <div>
//         <img
//           src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTcCYtXViur3D40yD9tu9Su-2al2pIQNdvsw4wfktQeR9HykMKaM22ulu64sf8PD0_rfwhnFDTlAxE&usqp=CAc"
//           alt="air plant"
//         />
//       </div>
//       <div>
//         <h2>Pok pok squid</h2>
//       </div>
//       <div>
//         Pok pok squid vape street art swag kale chips raw denim. Banh mi fixie chambray, meditation butcher gentrify
//         mukbang. Ennui yes plz.
//       </div>
//       <div>
//         <img
//           src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTYWhReZmORHVcx2YzNsSM8WDdPtpg3WJuko90c30YfCdhODqm2MHr0Y6fqqhFeFm9rA69BzqRjZA&usqp=CAc"
//           alt="squid costume"
//         />
//       </div>
//     </div>
//   );
// }
