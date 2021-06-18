import { Article } from './article.model';

describe('Article.Model.Ts', () => {
  it('should create an instance', () => {
    expect(new Article("", "")).toBeTruthy();
  });
});
