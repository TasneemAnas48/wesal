<template>
    <section id="contact-us" class="contact">
        <div class="container">
            <div class="contact-parent" v-scrollanimation>
                <div class="contact-left">
                    <h2 class="left-header">
                        {{ $t('contact.stayWithContact') }}
                    </h2>
                    <p class="left-discription">
                        {{ $t('contact.discription') }}
                    </p>
                    <div class="row left-email">
                        <b-icon icon="envelope" aria-hidden="true"></b-icon>
                        <p class="text-email"> wesal@gmail.com</p>
                    </div>
                </div>
                <div class="contact-right">
                    <h5 class="right-header">
                        {{ $t('contact.formHeader') }}
                    </h5>
                    <div class="container-form">
                        <b-form>
                            <b-form-group id="name" :label="$t('contact.form.name')" label-for="name">
                                <b-form-input :state="nameState" id="name" v-model="form.name"
                                    :placeholder="$t('contact.form.name_placeholder')"></b-form-input>
                                <b-form-invalid-feedback id="input-live-feedback">
                                    {{ $t('contact.requiredValidate') }}
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <b-form-group id="phone" :label="$t('contact.form.phone')" label-for="phone">
                                <b-form-input :state="phoneState" id="phone" v-model="form.phone" placeholder="963+ "
                                    type="tel"></b-form-input>
                                <b-form-invalid-feedback id="input-live-feedback">
                                    {{ $t('contact.phoneValidate') }}
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <b-form-group id="email" :label="$t('contact.form.email')" label-for="email">
                                <b-form-input :state="emailState" id="email" v-model="form.email" type="email"
                                    placeholder="youremail@email.com"></b-form-input>
                                <b-form-invalid-feedback id="input-live-feedback">
                                    {{ $t('contact.emailValidate') }}
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <b-form-group id="message" :label="$t('contact.form.message')" label-for="message">
                                <b-form-textarea :state="messageState" rows="3" id="message" v-model="form.message"
                                    type="text" :placeholder="$t('contact.form.message_placeholder')"></b-form-textarea>
                                <b-form-invalid-feedback id="input-live-feedback">
                                    {{ $t('contact.requiredValidate') }}
                                </b-form-invalid-feedback>
                            </b-form-group>

                            <div @click="validateInput" class="d-flex justify-content-end" style="margin-top: 30px">
                                <custom-button :buttonText="$t('contact.submitButton')" :button2=true />
                            </div>
                        </b-form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CustomButton from "@/components/Button.vue"
export default {
    name: "ContactUs",
    components: {
        CustomButton
    },
    data() {
        return {
            form: {
                email: '',
                name: '',
                phone: '',
                message: '',
            },
            nameState: null,
            emailState: null,
            phoneState: null,
            messageState: null,
        };
    },


    methods: {
        validateInput() {
            this.nameState = this.form.name.length > 0 ? true : false
            this.emailState = this.validEmail(this.form.email) ? true : false
            this.phoneState = this.form.phone.length > 9 ? true : false
            this.messageState = this.form.message.length > 0 ? true : false
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
};
</script>


<style lang="scss">
.contact {
    padding: 50px 0px 50px 0px;
    background-image: url(../assets/img/header-background.png);
    background-size: cover;
}

.contact .contact-left {
    background-image: url(../assets/img/contact-background-image.png);
    background-size: cover;
    text-align: justify;
    padding: 70px 40px;
}

.contact .left-header {
    font-weight: bold;
    color: #01244a;
}

.contact .left-discription {
    color: var(--gray);
    font-size: 14px;
    margin: 40px 0px 50px 0px;
}

.contact .left-email .text-email {
    color: var(--gray);
}

.contact .left-email .bi-envelope {
    color: var(--main-color);
    margin: 5px 10px 10px 15px;
}

@media (min-width: 992px) {
    .contact .contact-parent {
        grid-template-columns: repeat(2, 50%);
    }

    .contact .form-group {
        display: flex;
    }
}

@media (max-width: 991px) {
    .contact .contact-parent {
        grid-template-columns: repeat(1, auto);
    }
}

.contact .contact-parent {
    background-color: #fff;
    border-radius: 22.85px;
    display: grid;
    overflow: hidden;
    box-shadow: 14px 4rem 8rem rgb(24 37 56 / 12%);
}

.contact .contact-right {
    padding: 70px 40px;
    text-align: justify;
}

.contact .right-header {
    font-weight: bold;
    color: #01244a;
}

.contact .form-group {
    justify-content: space-between;
    margin: 20px 0px;
}

.contact .container-form {
    margin-right: 4%;
    margin-left: 4%;
    margin-top: 50px;
}

.contact .form-control {
    min-width: 20vw;
    background-color: #f6f9fc;
    outline: none;
    border: none;
    border-radius: 4px;
}

.contact .form-control:focus {
    background-color: #f6f9fc;
    border: none;
    box-shadow: none;
}

.contact .d-block {
    color: var(--gray)
}

.contact .invalid-feedback {
    font-size: 12px;
    padding: 7px 14px;
    margin-top: 5px;
    width: fit-content;
    color: #f03;
    background-color: rgba(255, 0, 51, 0.05);
    border-radius: 8px;
}

.contact .before-enter {
    opacity: 0;
    transform: translate(0) scale(0.8);
    transition: all 1.5s ease-out;
}

.contact .enter {
    opacity: 1;
    transform: translate(0) scale(1);
}
</style>