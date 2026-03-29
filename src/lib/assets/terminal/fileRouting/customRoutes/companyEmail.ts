import type { FileType } from '../routes';

export const companyEmail: FileType = {
	type: 'file',
	content: [
		'to: everyone@glimpse.com',
		'from: ceo@glimpse.com',
		'subject: News Article',
		'Hi everyone,',
		'',
		'I am sure we all saw todays news about Glimpse Inc and our collaboration with the NYPD.',
		'I want to clear up any confusion anyone has. There will be a non-mandatory Q&A today at 7pm.',
		'',
		'- Colin',
		'Ceo & Founder @ Glimpse'
	]
};

export const prEmail: FileType = {
	type: 'file',
	content: [
		'to: marketing@teams.glimpse.com',
		'cc: sales@teams.glimpse.com',
		'from: ceo@glimpse.com',
		'subject: News Article PR',
		'',
		'Hi guys,',
		'This news article is becoming a press relations nightmare.',
		'LMK what we need to do to get this to disappear.',
		'I remember last time we paid Tech Times $250k to delete a story, hoping we can do something similar.',
		'Im not worried about the price, just make this go away.',
		'- Colin'
	]
};
