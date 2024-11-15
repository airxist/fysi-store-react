import { TERMS_AND_CONDITION } from '../../constants'

const TermsAndConditions = () => {
  return (
    <div className="items-center justify-between border-t mt-7 border-grey-800 md:flex">
      <div className="items-center mt-4 mb-8 space-y-2 text-center md:flex md:space-y-0 gap-x-4">
        {TERMS_AND_CONDITION.map((item) => {
          return (
            <p key={item} className="text-xs text-forest_green-50 md:text-sm">
              {item}
            </p>
          );
        })}
      </div>

      <p className="text-xs text-center text-gray-50 md:text-sm">
        © 2023 Fysi. All rights reserved.
      </p>
    </div>
  )
}

export default TermsAndConditions