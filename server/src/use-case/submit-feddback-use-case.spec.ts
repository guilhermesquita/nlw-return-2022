import { SubmitFeedbacksUseCase } from "./submit-feedbacks-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbacksUseCase(
    { create: createFeedbackSpy},
    { sendMail: sendMailSpy}
)

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () => {
        await expect(submitFeedback.execute({
        type: 'BUG',
        comment: 'example content',
        screenshot: 'data:image/png;base64',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('should not be able to submit a feedback without a type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example content',
            screenshot: 'data:image/png;base64',
        })).resolves.toThrow();
    });
    
    it('should not be able to submit a feedback with a invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: '123',
        })).resolves.toThrow();
    });
    
})