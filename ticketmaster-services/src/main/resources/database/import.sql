INSERT INTO TEST.MENU (MENU_ID, TEXT, URL) VALUES (1, 'About', 'about.html');
INSERT INTO TEST.MENU (MENU_ID, TEXT, URL) VALUES (2, 'Services', 'services.html');
INSERT INTO TEST.MENU (MENU_ID, TEXT, URL) VALUES (3, 'Contact', 'contact.html');
INSERT INTO TEST.MENU (MENU_ID, TEXT, URL) VALUES (4, 'Portfolio', '#');
INSERT INTO TEST.MENU (MENU_ID, TEXT, URL) VALUES (5, 'Blog', '#');
// events table
INSERT INTO test.EVENT(
            EVENT_ID, TITLE, IMG_SRC, ACTIVE, SHORT_DESCRIPTION)
    VALUES (1, 'Event1', 'http://placehold.it/1900x1080', true, 'Slide One');
INSERT INTO test.EVENT(
            EVENT_ID, TITLE, IMG_SRC, ACTIVE, SHORT_DESCRIPTION)
    VALUES (2, 'Event2', 'http://placehold.it/1900x1080', false, 'Slide Two');
INSERT INTO test.EVENT(
            EVENT_ID, TITLE, IMG_SRC, ACTIVE, SHORT_DESCRIPTION)
    VALUES (3, 'Event3', 'http://placehold.it/1900x1080', false, 'Slide Three');