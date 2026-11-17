// 2026-11-16 +03: Get Balance action (POST /API/balance/).
import { createAction } from '@activepieces/pieces-framework';
import { kwtsmsAuth } from '../auth';
import { callKwtsms } from '../common';

// 2026-11-17 14:10 +03: classification and audience removed: not in pieces-framework 0.32.0 on npm (int-ap-npm)
export const kwtsmsGetBalance = createAction({
  auth: kwtsmsAuth,
  name: 'get_balance',
  description: 'Get the available and purchased SMS credits.',
  aiMetadata: {
    description:
      'Returns the kwtSMS account credit balance: available credits and total purchased credits. Read-only and idempotent. Not needed after a send, because the send result already includes the balance.',
    idempotent: true,
  },
  displayName: 'Get Balance',
  props: {},
  async run(context) {
    return await callKwtsms<{ available: number; purchased: number }>(
      'balance',
      context.auth.props,
    );
  },
});
