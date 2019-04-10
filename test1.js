Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('Kiem tra chuc nang giao bai tap', function () {
    context('Test HL_GBT_46', function () {
        it('Đăng nhập tài khoản giáo viên', function () {
            const _username = 'phonghatuan1998@gmail.com'
            const _password = 'horsemen2014'
            cy.visit('http://hoclieu.sachmem.vn')
            cy.contains('Đăng nhập').click()
            //cy.visit('http://accounts.sachmem.vn/users/sign_in')
            cy.get('[id="user_email"]').type(_username)
            cy.get('[id="user_password"]').type(_password)
            cy.get('[name="commit"]').click()
        })

        it('Chọn bài tập và ấn nút giao bài', function () {
            cy.contains('Lớp 1').click()
            cy.contains('Bài tập cuối tuần Tiếng Việt 1 Tập 1').click()
            cy.wait(3000)
            cy.get('.pull-right > .btn').click()
        })

        it('Ngày giờ bắt đầu tăng 5s sau khi nhấn up arrow key', function () {
            var a = cy.get('[placeholder="MM"]').first()
            a.invoke('val').then((val1) => {
                cy.log('before: ' + val1)
                var b = cy.get('[placeholder="MM"]').first()
                b.type('{uparrow}')
                b.invoke('val').then((val2) => {
                    cy.log('after: ' + val2)
                    expect(val2 - val1).to.eq(5)
                })
            })
        })

        it('Ngày giờ bắt đầu giảm 5s sau khi nhấn down arrow key', function () {
            var a = cy.get('[placeholder="MM"]').first()
            a.invoke('val').then((val1) => {
                cy.log('before: ' + val1)
                var b = cy.get('[placeholder="MM"]').first()
                b.type('{downarrow}')
                b.invoke('val').then((val2) => {
                    cy.log('after: ' + val2)
                    expect(val2 - val1).to.eq(-5)
                })
            })
        })

        it('Ngày giờ kết thúc tăng 5s sau khi nhấn up arrow key', function () {
            var a = cy.get('[placeholder="MM"]').last()
            a.invoke('val').then((val1) => {
                cy.log('before: ' + val1)
                var b = cy.get('[placeholder="MM"]').last()
                b.type('{uparrow}')
                b.invoke('val').then((val2) => {
                    cy.log('after: ' + val2)
                    if (val2 < val1)
                        expect(val2 - val1).to.eq(5 - 60)
                    else
                        expect(val2 - val1).to.eq(5)
                })
            })
        })

        it('Ngày giờ kết thúc giảm 5s sau khi nhấn down arrow key', function () {
            var a = cy.get('[placeholder="MM"]').last()
            a.invoke('val').then((val1) => {
                cy.log('before: ' + val1)
                var b = cy.get('[placeholder="MM"]').last()
                b.type('{downarrow}')
                b.invoke('val').then((val2) => {
                    cy.log('after: ' + val2)
                    if (val1 < val2)
                        expect(val1 - val2).to.eq(5 - 60)
                    else
                        expect(val1 - val2).to.eq(5)
                })
            })
        })
    })
})