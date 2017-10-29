describe('isValidDate', function() {
    describe('hasValidLength', function() {
        it('has 8 or 10 characters', function() {
            expect(hasValidLength('03-13-1991')).toBe(true);
            expect(hasValidLength('03-13-91')).toBe(true);

            expect(hasValidLength('03-13-19911')).toBe(false);  // 11 chars
            expect(hasValidLength('03-13-199')).toBe(false);    // 9 chars
            expect(hasValidLength('03-13-9')).toBe(false);      // 7 chars
            expect(hasValidLength('2/19/2014')).toBe(false);      // 7 chars
        });
    });

    describe('hasValidMonth', function() {
        it('has a month of "01" - "12"', function() {
            expect(hasValidMonth('01-13-1991')).toBe(true);
            expect(hasValidMonth('12-13-91')).toBe(true);

            expect(hasValidMonth('00-13-1991')).toBe(false);
            expect(hasValidMonth('13-13-1991')).toBe(false);
        });
    });
    describe('hasValidDelimiter', function() {
        it('has a delimiter of "-" or "/" or "."', function() {
            expect(hasValidDelimiter('09-10-1992')).toBe(true);
            expect(hasValidDelimiter('09/10/1992')).toBe(true);
            expect(hasValidDelimiter('09.10.1992')).toBe(true);

            expect(hasValidDelimiter('09~10~1992')).toBe(false);  // Invalid Delimiter
            expect(hasValidDelimiter('09\10\1992')).toBe(false);  // Invalid Delimiter
            expect(hasValidDelimiter('09,10,1992')).toBe(false);  // Invalid Delimiter
            expect(hasValidDelimiter('09/10-1992')).toBe(false);  // Invalid Delimiter
            expect(hasValidDelimiter('09-10.1992')).toBe(false);  // Invalid Delimiter
            expect(hasValidDelimiter('09.10/1992')).toBe(false);  // Invalid Delimiter
        });
    });
    describe('hasValidDay', function() {
        it('has a valid day given the month', function() {
            expect(hasValidDay('01-01-1992')).toBe(true);
            expect(hasValidDay('01-31-1992')).toBe(true);
            expect(hasValidDay('02-29-1992')).toBe(true);
            expect(hasValidDay('02-29-92')).toBe(true);
            expect(hasValidDay('02-28-1992')).toBe(true);
            expect(hasValidDay('03-31-1992')).toBe(true);
            expect(hasValidDay('04-30-1992')).toBe(true);
            expect(hasValidDay('05-31-1992')).toBe(true);
            expect(hasValidDay('06-30-1992')).toBe(true);
            expect(hasValidDay('07-31-1992')).toBe(true);
            expect(hasValidDay('08-31-1992')).toBe(true);
            expect(hasValidDay('09-30-1992')).toBe(true);
            expect(hasValidDay('10-31-1992')).toBe(true);
            expect(hasValidDay('11-30-1992')).toBe(true);
            expect(hasValidDay('12-31-1992')).toBe(true);

            expect(hasValidDay('01-32-1992')).toBe(false);
            expect(hasValidDay('01-00-1992')).toBe(false);
            expect(hasValidDay('02-30-1992')).toBe(false);
            expect(hasValidDay('02--1-1992')).toBe(false);
            expect(hasValidDay('03-32-1992')).toBe(false);
            expect(hasValidDay('04-31-1992')).toBe(false);
            expect(hasValidDay('05-32-1992')).toBe(false);
            expect(hasValidDay('06-31-1992')).toBe(false);
            expect(hasValidDay('07-32-1992')).toBe(false);
            expect(hasValidDay('08-32-1992')).toBe(false);
            expect(hasValidDay('09-31-1992')).toBe(false);
            expect(hasValidDay('10-32-1992')).toBe(false);
            expect(hasValidDay('11-31-1992')).toBe(false);
            expect(hasValidDay('12-32-1992')).toBe(false);

        });
    });
});