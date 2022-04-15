import { useSession, signIn } from 'next-auth/client';
import { api } from '../../services/api';
import { getStipeJs } from '../../services/stripe-js';

import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [ session ] = useSession();

  async function handleSubscribe() {
    if(!session) {
      signIn('github');
      return;
    }


    try {
      const response = await api.post('/subscribe');

      const { sessionId } = response.data;

      const stripe = await getStipeJs();

      await stripe.redirectToCheckout({ sessionId: sessionId });

    } catch (err) {
      alert(err.message);
    }

  }


  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Subscribe now
    </button>
  )
}