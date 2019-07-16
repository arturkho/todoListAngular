import { TodoListAngularPage } from './app.po';

describe('todo-list-angular App', function() {
  let page: TodoListAngularPage;

  beforeEach(() => {
    page = new TodoListAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
