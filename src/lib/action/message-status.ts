// 2026-11-16 +03: Message Status action (POST /API/status/): queue status of a sent message, not a delivery report.
import { createAction, Property } from '@activepieces/pieces-framework';
import { kwtsmsAuth } from '../auth';
import { callKwtsms } from '../common';

// 2026-11-17 14:10 +03: classification and audience removed: not in pieces-framework 0.32.0 on npm (int-ap-npm)
export const kwtsmsMessageStatus = createAction({
  auth: kwtsmsAuth,
  name: 'message_status',
  description: 'Get the queue status of a sent message.',
  aiMetadata: {
    description:
      'Looks up a kwtSMS message by its msg-id (returned by Send SMS) and returns its queue status and description: pending, error in queue, or sent to gateway. This is not a delivery report. Read-only and idempotent.',
    idempotent: true,
  },
  displayName: 'Message Status',
  props: {
    msgid: Property.ShortText({
      displayName: 'Message ID',
      description: 'The msg-id returned by Send SMS.',
      required: true,
    }),
  },
  async run(context) {
    return await callKwtsms<{ status: string; description: string }>(
      'status',
      context.auth.props,
      { msgid: context.propsValue.msgid.trim() },
    );
  },
});
