

interface WelcomeMessageProps {
    name: string;
  }
  
  const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ name }) => {
    return <h1>Üdvözöljük, {name}!</h1>;
  };

    
export default WelcomeMessageProps


  
 